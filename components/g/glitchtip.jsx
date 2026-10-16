import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdspv00fi.css';
import '../../css/a/ajymxmbye.css';
import '../../css/h/hu1lbkrbg.css';
import '../../css/r/rix36nbaf.css';

const viewBox = {"width":74.76,"height":86.64,"left":707.2,"top":510.7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdspv00fi"/><path class="ajymxmbye"/><path class="hu1lbkrbg"/><path class="rix36nbaf"/>`,
		"fallback": "thesvg-color:glitchtip",
	});
}

export default Component;
