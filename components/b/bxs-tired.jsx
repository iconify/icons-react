import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frzl9ub9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frzl9ub9d"/>`,
		"fallback": "bx:bxs-tired",
	});
}

export default Component;
