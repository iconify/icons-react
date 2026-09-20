import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/laa_wbbuw.css';
import '../../css/o/orf_rbcmo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="laa_wbbuw"/><path class="orf_rbcmo"/></g>`,
		"fallback": "streamline-flex:dashboard-gauge-1",
	});
}

export default Component;
