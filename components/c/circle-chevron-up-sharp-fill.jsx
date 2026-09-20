import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omd6vzz8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omd6vzz8h"/>`,
		"fallback": "keyline-icons:circle-chevron-up-sharp-fill",
	});
}

export default Component;
