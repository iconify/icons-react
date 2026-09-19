import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a0poujb0g.css';
import '../../css/q/qyt7vo6ko.css';
import '../../css/c/cb8u71hty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a0poujb0g"/><path class="qyt7vo6ko"/><path class="cb8u71hty"/></g>`,
		"fallback": "hugeicons:camera-night-mode-01",
	});
}

export default Component;
