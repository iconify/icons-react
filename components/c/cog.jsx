import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_3nitkdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_3nitkdt"/>`,
		"fallback": "zondicons:cog",
	});
}

export default Component;
