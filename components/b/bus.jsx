import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hhe5k0bdd.css';
import '../../css/m/mimv7fb-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hhe5k0bdd"/><path class="mimv7fb-b"/></g>`,
		"fallback": "streamline:bus",
	});
}

export default Component;
