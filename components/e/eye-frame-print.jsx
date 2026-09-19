import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/e/eb-s-ebcf.css';
import '../../css/o/oc-y6ablj.css';
import '../../css/q/qichbz0gu.css';
import '../../css/p/pineos8mm.css';
import '../../css/q/quiaatbtt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="eb-s-ebcf"/><path clip-rule="evenodd" class="oc-y6ablj"/></g><path clip-rule="evenodd" class="qichbz0gu"/><path clip-rule="evenodd" class="pineos8mm"/><path clip-rule="evenodd" class="quiaatbtt"/></g>`,
		"fallback": "pepicons:eye-frame-print",
	});
}

export default Component;
