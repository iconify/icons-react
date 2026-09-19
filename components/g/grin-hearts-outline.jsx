import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/ms0gcnb0v.css';
import '../../css/n/ni8xmk99j.css';
import '../../css/z/zt6ewu8gv.css';
import '../../css/q/qqiubgb1z.css';
import '../../css/z/zt1e34j_a.css';
import '../../css/o/o5bvdq2hn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ms0gcnb0v"/><path class="ni8xmk99j"/><path class="zt6ewu8gv"/><path class="qqiubgb1z"/><path class="zt1e34j_a"/><path class="o5bvdq2hn"/></g>`,
		"fallback": "glyphs:grin-hearts-outline",
	});
}

export default Component;
