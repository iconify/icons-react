import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yymxa77sn.css';
import '../../css/h/hy-ukhbzh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yymxa77sn"/><path class="hy-ukhbzh"/></g>`,
		"fallback": "si-glyph:cloud-upload",
	});
}

export default Component;
