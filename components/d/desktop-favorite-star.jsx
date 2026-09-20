import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/atx0ukbdu.css';
import '../../css/f/fc6qeabax.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="atx0ukbdu"/><path class="fc6qeabax"/></g>`,
		"fallback": "streamline:desktop-favorite-star",
	});
}

export default Component;
