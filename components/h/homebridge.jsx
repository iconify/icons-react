import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwk4ow2yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwk4ow2yn"/>`,
		"fallback": "thesvg-color:homebridge",
	});
}

export default Component;
