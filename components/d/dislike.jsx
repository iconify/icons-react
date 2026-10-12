import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tszq-qb5n.css';
import '../../css/l/lhj6s4b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 22.04 2.92)" class="tszq-qb5n"/><path class="lhj6s4b6f"/></g>`,
		"fallback": "andrsrxn:dislike",
	});
}

export default Component;
