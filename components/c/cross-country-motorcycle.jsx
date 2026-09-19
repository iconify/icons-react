import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt0q_253e.css';
import '../../css/l/l4n_uxb6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lt0q_253e"/><path class="l4n_uxb6l"/></g>`,
		"fallback": "healthicons:cross-country-motorcycle",
	});
}

export default Component;
