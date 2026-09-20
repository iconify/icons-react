import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pn-4vdb5k.css';
import '../../css/l/lgu-uxesv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pn-4vdb5k"/><path class="lgu-uxesv"/></g>`,
		"fallback": "streamline-flex:gas-station-fuel-petroleum",
	});
}

export default Component;
