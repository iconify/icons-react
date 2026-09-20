import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/l/l6xn0kdft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_ev7s-sv"/><path class="l6xn0kdft"/></g>`,
		"fallback": "material-icon-theme:document",
	});
}

export default Component;
