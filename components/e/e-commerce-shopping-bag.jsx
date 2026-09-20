import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stwmvkq9n.css';
import '../../css/x/xnao-lbdh.css';
import '../../css/s/semxxhoex.css';
import '../../css/h/hwknedbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stwmvkq9n"/><path class="xnao-lbdh"/><path class="semxxhoex"/><path class="hwknedbmd"/></g>`,
		"fallback": "streamline-ultimate-color:e-commerce-shopping-bag",
	});
}

export default Component;
