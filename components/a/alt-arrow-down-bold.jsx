import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_r62_bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_r62_bax"/>`,
		"fallback": "solar:alt-arrow-down-bold",
	});
}

export default Component;
