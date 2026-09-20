import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s_1fus9uv.css';
import '../../css/n/nc1u010to.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s_1fus9uv"/><path class="nc1u010to"/></g>`,
		"fallback": "streamline:desktop-emoji",
	});
}

export default Component;
