import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qmdl50mwg.css';
import '../../css/f/fr5kl9bxl.css';
import '../../css/z/zz1e7_bjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qmdl50mwg"/><path clip-rule="evenodd" class="fr5kl9bxl"/><path class="zz1e7_bjj"/></g>`,
		"fallback": "pepicons:eye-print",
	});
}

export default Component;
