import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lw9fkn8oo.css';
import '../../css/f/fm3qqrbsa.css';
import '../../css/y/yxgzcxf7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lw9fkn8oo"/><path class="fm3qqrbsa"/><path class="ouiIcon__fillSecondary yxgzcxf7b"/></g>`,
		"fallback": "oui:app-notebook",
	});
}

export default Component;
