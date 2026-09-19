import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzgl9nf4r.css';
import '../../css/a/avwnx2v4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qzgl9nf4r"/><path class="avwnx2v4h"/></g>`,
		"fallback": "healthicons:blood-vessel-outline",
	});
}

export default Component;
