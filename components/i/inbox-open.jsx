import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l0e_l5w2x.css';
import '../../css/o/odib12-bg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l0e_l5w2x"/><path class="odib12-bg"/></g>`,
		"fallback": "streamline-flex:inbox-open",
	});
}

export default Component;
