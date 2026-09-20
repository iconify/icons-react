import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf7voj8ls.css';
import '../../css/y/ygu8ifd-f.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wn-_rqbea.css';
import '../../css/u/u3kyoh3ye.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf7voj8ls"/><path class="ygu8ifd-f"/><g class="ij2x_72vy"><path class="wn-_rqbea"/><path class="u3kyoh3ye"/></g>`,
		"fallback": "openmoji:cross-mark-button",
	});
}

export default Component;
