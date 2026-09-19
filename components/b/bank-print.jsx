import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/p9qy93dyh.css';
import '../../css/c/cjrx-59sz.css';
import '../../css/n/ng2qdwb7q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="p9qy93dyh"/><path clip-rule="evenodd" class="cjrx-59sz"/></g><path clip-rule="evenodd" class="ng2qdwb7q"/></g>`,
		"fallback": "pepicons:bank-print",
	});
}

export default Component;
