import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/av72an-bc.css';
import '../../css/v/voaam0blq.css';
import '../../css/w/wd4ulgb6m.css';
import '../../css/t/t4aluqb8v.css';
import '../../css/q/q8g6lknzb.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="av72an-bc"/><path class="voaam0blq"/><path class="wd4ulgb6m"/><path class="t4aluqb8v"/><path class="q8g6lknzb"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:coins-circle",
	});
}

export default Component;
