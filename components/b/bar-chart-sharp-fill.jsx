import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0tav10am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0tav10am"/>`,
		"fallback": "keyline-icons:bar-chart-sharp-fill",
	});
}

export default Component;
