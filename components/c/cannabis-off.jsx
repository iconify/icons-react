import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjxz6jo1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjxz6jo1w"/>`,
		"fallback": "hugeicons:cannabis-off",
	});
}

export default Component;
