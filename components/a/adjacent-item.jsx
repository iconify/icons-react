import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh_aoflox.css';
import '../../css/i/iwe9aebqs.css';
import '../../css/b/bwr7q0bwn.css';
import '../../css/z/z3er-5gec.css';
import '../../css/z/zaf-rebyr.css';
import '../../css/z/zso6rv_7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kh_aoflox"/><path class="iwe9aebqs"/><path class="bwr7q0bwn"/><path class="z3er-5gec"/><path class="zaf-rebyr"/><path class="zso6rv_7d"/></g>`,
		"fallback": "icon-park:adjacent-item",
	});
}

export default Component;
