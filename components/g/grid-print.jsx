import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/r/rdpoembmx.css';
import '../../css/y/yf2e2qbao.css';
import '../../css/c/c-k3z045a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="rdpoembmx"/><path clip-rule="evenodd" class="yf2e2qbao"/></g><path clip-rule="evenodd" class="c-k3z045a"/></g>`,
		"fallback": "pepicons:grid-print",
	});
}

export default Component;
