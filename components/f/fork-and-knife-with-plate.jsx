import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4z_agy3h.css';
import '../../css/g/gtl5_mbfu.css';
import '../../css/f/f77ow1-rp.css';
import '../../css/j/j7oihg-em.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/y/y50_l57je.css';
import '../../css/e/ec92z_pcz.css';
import '../../css/r/ri8gvzbpp.css';
import '../../css/d/dtoy04b3t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="u4z_agy3h"><path class="gtl5_mbfu"/><circle class="f77ow1-rp"/><circle class="j7oihg-em"/></g><g class="x8poo_bjf"><path class="y50_l57je"/><path class="ec92z_pcz"/><circle class="ri8gvzbpp"/><circle class="dtoy04b3t"/></g>`,
		"fallback": "openmoji:fork-and-knife-with-plate",
	});
}

export default Component;
