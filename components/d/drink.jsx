import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8bl7ccll.css';
import '../../css/c/c0p68vugx.css';
import '../../css/v/vqb7gqb-k.css';
import '../../css/l/l6qh4ccqu.css';
import '../../css/x/xy0v1c0vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8bl7ccll"/><path class="c0p68vugx"/><path class="vqb7gqb-k"/><path class="l6qh4ccqu"/><path class="xy0v1c0vo"/></g>`,
		"fallback": "andrsrxn:drink",
	});
}

export default Component;
