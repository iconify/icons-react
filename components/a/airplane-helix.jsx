import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufie9ebgy.css';
import '../../css/g/guewfbcxi.css';
import '../../css/f/f4er-0bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufie9ebgy"><path class="guewfbcxi"/><path clip-rule="evenodd" class="f4er-0bna"/></g>`,
		"fallback": "iconoir:airplane-helix",
	});
}

export default Component;
