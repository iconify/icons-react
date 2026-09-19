import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/agry-ccmw.css';
import '../../css/y/yb15pgblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="agry-ccmw"/><path class="yb15pgblf"/></g>`,
		"fallback": "iconoir:fingerprint-window",
	});
}

export default Component;
