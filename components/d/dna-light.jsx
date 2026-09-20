import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/w/w3_67jbrf.css';
import '../../css/l/lyw-_rbph.css';
import '../../css/k/ko1dr6spr.css';
import '../../css/y/ys_8v2bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="w3_67jbrf"/><path class="lyw-_rbph"/><path class="ko1dr6spr"/><path class="ys_8v2bjr"/></g>`,
		"fallback": "lets-icons:dna-light",
	});
}

export default Component;
