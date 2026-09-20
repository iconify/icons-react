import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q1dc64bou.css';
import '../../css/t/t4os46ber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q1dc64bou"/><path class="t4os46ber"/></g>`,
		"fallback": "streamline:bill-2",
	});
}

export default Component;
