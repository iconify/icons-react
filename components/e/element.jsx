import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzj6jnmej.css';
import '../../css/x/x7_obj_jd.css';
import '../../css/e/ezye3muvw.css';
import '../../css/i/i7r0opb0m.css';
import '../../css/s/s30izqmyr.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/usozxnbrm.css';
import '../../css/y/y8m34v4yc.css';
import '../../css/e/e50rlqmkw.css';
import '../../css/x/xozul-95b.css';
import '../../css/e/eibri6b8f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kzj6jnmej"/><path clip-rule="evenodd" class="x7_obj_jd"/><path clip-rule="evenodd" class="ezye3muvw"/><path clip-rule="evenodd" class="i7r0opb0m"/><path clip-rule="evenodd" class="s30izqmyr"/><g class="brzn_0bpr"><circle class="usozxnbrm"/><path class="y8m34v4yc"/><path class="e50rlqmkw"/><path class="xozul-95b"/><path class="eibri6b8f"/></g>`,
		"fallback": "openmoji:element",
	});
}

export default Component;
