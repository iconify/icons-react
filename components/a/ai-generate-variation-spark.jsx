import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izq6l1bsl.css';
import '../../css/y/y5q7-6byf.css';
import '../../css/r/rcr7nqbwb.css';
import '../../css/s/sluqu70kt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="izq6l1bsl"/><path class="y5q7-6byf"/><path class="rcr7nqbwb"/><path class="sluqu70kt"/></g>`,
		"fallback": "streamline-color:ai-generate-variation-spark",
	});
}

export default Component;
