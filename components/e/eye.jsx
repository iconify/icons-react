import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dmesvbbbc.css';
import '../../css/g/gz3bf3izr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dmesvbbbc"/><circle class="gz3bf3izr"/></g>`,
		"fallback": "iconaut:eye",
	});
}

export default Component;
