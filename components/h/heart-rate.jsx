import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i00l4ub9g.css';
import '../../css/x/xa8rigbuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i00l4ub9g"/><path class="xa8rigbuu"/></g>`,
		"fallback": "streamline-flex:heart-rate",
	});
}

export default Component;
