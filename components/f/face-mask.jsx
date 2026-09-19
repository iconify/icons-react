import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5ej4pbho.css';
import '../../css/p/p_f9wqv2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5ej4pbho"/><path class="p_f9wqv2d"/>`,
		"fallback": "boxicons:face-mask",
	});
}

export default Component;
