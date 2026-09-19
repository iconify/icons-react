import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/a/ajocccbun.css';
import '../../css/q/qdju_550o.css';
import '../../css/e/e8bpjlecu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="ajocccbun"/><path class="qdju_550o"/></g><path clip-rule="evenodd" class="e8bpjlecu"/></g>`,
		"fallback": "pepicons:hand-grab-print",
	});
}

export default Component;
