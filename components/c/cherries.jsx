import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nsni0fo7m.css';
import '../../css/q/qy_dswk2r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nsni0fo7m"/><path class="qy_dswk2r"/></g>`,
		"fallback": "streamline:cherries",
	});
}

export default Component;
