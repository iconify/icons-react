import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ossksxb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ossksxb7h"/>`,
		"fallback": "keyline-icons:chart-column-sharp-fill",
	});
}

export default Component;
