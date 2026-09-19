import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4mlh1uuk.css';
import '../../css/p/pkcq0m6tt.css';
import '../../css/c/cswztabte.css';
import '../../css/c/ci8uf7-fy.css';
import '../../css/e/e4hr4qbju.css';
import '../../css/c/cmg54dw8h.css';
import '../../css/f/f_d-3kboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s4mlh1uuk"/><path clip-rule="evenodd" class="pkcq0m6tt"/><path clip-rule="evenodd" class="cswztabte"/><path class="ci8uf7-fy"/><path class="e4hr4qbju"/><path clip-rule="evenodd" class="cmg54dw8h"/><path clip-rule="evenodd" class="f_d-3kboe"/></g>`,
		"fallback": "healthicons:exercise-bicycle-outline",
	});
}

export default Component;
