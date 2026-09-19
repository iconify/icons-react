import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3sa4vfqa.css';
import '../../css/d/djqgk_arv.css';
import '../../css/p/pqozpx_ba.css';
import '../../css/u/u9tt5cbmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g3sa4vfqa"/><path class="djqgk_arv"/><path class="pqozpx_ba"/><path class="u9tt5cbmm"/></g>`,
		"fallback": "healthicons:close-policy-gaps",
	});
}

export default Component;
