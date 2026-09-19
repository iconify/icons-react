import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqsf4sb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqsf4sb_k"/>`,
		"fallback": "boxicons:backpack",
	});
}

export default Component;
