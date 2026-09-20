import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/enu55ibvg.css';
import '../../css/i/iu5cueb_k.css';
import '../../css/i/ili3slbxi.css';
import '../../css/l/l98i6k70k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="enu55ibvg"/><path clip-rule="evenodd" class="iu5cueb_k"/><path class="ili3slbxi"/><path clip-rule="evenodd" class="l98i6k70k"/></g>`,
		"fallback": "streamline-color:coin-share-flat",
	});
}

export default Component;
