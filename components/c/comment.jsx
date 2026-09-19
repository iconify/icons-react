import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz6p_b0ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz6p_b0ho"/>`,
		"fallback": "gridicons:comment",
	});
}

export default Component;
