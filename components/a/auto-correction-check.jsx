import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uh5e88bra.css';
import '../../css/b/bo_if5bod.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uh5e88bra"/><path class="bo_if5bod"/></g>`,
		"fallback": "streamline-flex:auto-correction-check",
	});
}

export default Component;
