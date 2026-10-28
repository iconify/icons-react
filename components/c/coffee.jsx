import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jg3i2w63e.css';
import '../../css/w/w5f0m57dc.css';
import '../../css/o/ogk20me7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="jg3i2w63e"/><path class="w5f0m57dc"/><path class="ogk20me7t"/></g>`,
		"fallback": "codex:coffee",
	});
}

export default Component;
