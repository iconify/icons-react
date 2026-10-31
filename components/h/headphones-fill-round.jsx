import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fngnv_hoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fngnv_hoo"/>`,
		"fallback": "coolicons:headphones-fill-round",
	});
}

export default Component;
