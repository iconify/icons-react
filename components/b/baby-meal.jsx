import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/c/cq_stlbtf.css';
import '../../css/b/bbo52rblp.css';
import '../../css/w/wram_obqm.css';
import '../../css/x/x9r1-rbtd.css';
import '../../css/c/c5vbqcbte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="cq_stlbtf"/><path class="bbo52rblp"/><path class="wram_obqm"/><path class="x9r1-rbtd"/><path class="c5vbqcbte"/></g>`,
		"fallback": "icon-park:baby-meal",
	});
}

export default Component;
