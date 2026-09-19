import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqr_gccre.css';
import '../../css/q/q6az9ltax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b lqr_gccre"/><path class="b q6az9ltax"/>`,
		"fallback": "boxicons:groceries",
	});
}

export default Component;
