import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbepz408x.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/qyj032rbb.css';
import '../../css/b/byn-yqbec.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbepz408x"/><g class="jn8qy4bru"><circle class="qyj032rbb"/><circle class="byn-yqbec"/></g>`,
		"fallback": "openmoji:hollow-red-circle",
	});
}

export default Component;
