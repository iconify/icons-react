import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yivttkrvg.css';
import '../../css/l/lny3dw69s.css';
import '../../css/n/nfq25ebpr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yivttkrvg"/><path class="lny3dw69s"/><path class="nfq25ebpr"/></g>`,
		"fallback": "streamline-flex:graph-bar-increase-square",
	});
}

export default Component;
