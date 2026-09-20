import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/y/yvaeisbbi.css';
import '../../css/j/jxkkhtbrd.css';
import '../../css/g/gdz_8eb4b.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="yvaeisbbi"/><path clip-rule="evenodd" class="jxkkhtbrd"/><path clip-rule="evenodd" class="gdz_8eb4b"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:earth-europe-circle",
	});
}

export default Component;
