import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bw7ve-bbl.css';
import '../../css/t/t948mjb1x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bw7ve-bbl"/><path class="t948mjb1x"/></g>`,
		"fallback": "healthicons:exercise-weights-outline",
	});
}

export default Component;
