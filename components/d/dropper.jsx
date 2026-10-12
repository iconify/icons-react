import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-ge9dole.css';
import '../../css/m/mm0h37bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(135 5.571 9.374)scale(-1 1)" class="k-ge9dole"/><path class="mm0h37bnj"/></g>`,
		"fallback": "andrsrxn:dropper",
	});
}

export default Component;
