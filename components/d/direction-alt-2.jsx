import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/bt5dvqb7d.css';
import '../../css/g/gtk13johy.css';
import '../../css/w/wvx0llyqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="bt5dvqb7d"/><path class="gtk13johy"/><path class="wvx0llyqr"/></g>`,
		"fallback": "lets-icons:direction-alt-2",
	});
}

export default Component;
