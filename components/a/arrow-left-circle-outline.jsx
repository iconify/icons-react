import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tgva9kbpr.css';
import '../../css/f/ff63l0b3c.css';
import '../../css/l/lrg81dt7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="arrow-left-circle-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="tgva9kbpr"/><path class="ff63l0b3c"/><path class="lrg81dt7m"/></g></g>`,
		"fallback": "cuida:arrow-left-circle-outline",
	});
}

export default Component;
