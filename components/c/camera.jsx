import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_vbzsbjb.css';
import '../../css/a/aykchpjie.css';
import '../../css/a/a-l4vyfjm.css';
import '../../css/u/ub0zacarc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_vbzsbjb"/><path clip-rule="evenodd" class="aykchpjie"/><path class="a-l4vyfjm"/><path clip-rule="evenodd" class="ub0zacarc"/></g>`,
		"fallback": "healthicons:camera",
	});
}

export default Component;
