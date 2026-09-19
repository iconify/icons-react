import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erkbk1bws.css';
import '../../css/q/qk73ghbvw.css';
import '../../css/p/p7irl_svi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="erkbk1bws"/><path clip-rule="evenodd" class="qk73ghbvw"/><path class="p7irl_svi"/></g>`,
		"fallback": "healthicons:4x4-outline",
	});
}

export default Component;
