import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zr_lbtkpu.css';
import '../../css/w/wx_97fbvz.css';
import '../../css/o/o-mxp99xh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zr_lbtkpu"/><path class="wx_97fbvz"/><path class="o-mxp99xh"/></g>`,
		"fallback": "pepicons:file",
	});
}

export default Component;
