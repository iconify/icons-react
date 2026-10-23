import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/ab3txbb0w.css';
import '../../css/p/pdw1o4qxo.css';
import '../../css/k/knm4ai2cd.css';
import '../../css/z/z2dm8mbrr.css';
import '../../css/g/gdz5ysbjv.css';
import '../../css/j/jxb4o224v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ab3txbb0w"/><path class="pdw1o4qxo"/><path class="knm4ai2cd"/><path class="z2dm8mbrr"/><path class="gdz5ysbjv"/><path class="jxb4o224v"/></g>`,
		"fallback": "matita:dna",
	});
}

export default Component;
