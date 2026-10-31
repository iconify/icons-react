import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jdvtwv4xj.css';
import '../../css/o/o861mcd_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jdvtwv4xj"/><path class="o861mcd_z"/></g>`,
		"fallback": "withicons-retro:case-upper",
	});
}

export default Component;
