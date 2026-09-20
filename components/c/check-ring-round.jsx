import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/e7siirb6p.css';
import '../../css/r/r3j_zn7et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="e7siirb6p"/><path class="r3j_zn7et"/></g>`,
		"fallback": "lets-icons:check-ring-round",
	});
}

export default Component;
