import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqfgfb1ge.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqfgfb1ge"/>`,
		"fallback": "streamline-flex:hospital-sign",
	});
}

export default Component;
