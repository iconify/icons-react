import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_33h3d_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_33h3d_t"/>`,
		"fallback": "boxicons:caret-up",
	});
}

export default Component;
