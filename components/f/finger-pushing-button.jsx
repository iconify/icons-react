import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1etqbgrj.css';
import '../../css/m/mpk8geb5y.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uz1fk_bxd.css';
import '../../css/w/wr-x_mbck.css';
import '../../css/k/kgjn30alc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1etqbgrj"/><path class="mpk8geb5y"/><g class="jn8qy4bru"><path class="uz1fk_bxd"/><path class="wr-x_mbck"/><path class="kgjn30alc"/></g>`,
		"fallback": "openmoji:finger-pushing-button",
	});
}

export default Component;
