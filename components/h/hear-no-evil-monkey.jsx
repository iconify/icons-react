import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_ywmbbfi.css';
import '../../css/p/pe71c_33p.css';
import '../../css/h/h2sscejmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_ywmbbfi"/><path class="pe71c_33p"/><path class="h2sscejmd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hear-no-evil-monkey",
	});
}

export default Component;
