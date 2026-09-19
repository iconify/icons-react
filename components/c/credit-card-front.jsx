import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/ttnw4krmf.css';
import '../../css/q/qg_qhninr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ttnw4krmf"/><path class="qg_qhninr"/></g>`,
		"fallback": "glyphs:credit-card-front",
	});
}

export default Component;
