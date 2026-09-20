import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vl8-gmbjj.css';
import '../../css/g/g69zyobik.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vl8-gmbjj"/><path class="g69zyobik"/></g>`,
		"fallback": "streamline-flex:hierarchy-16",
	});
}

export default Component;
