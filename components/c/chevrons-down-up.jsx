import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbakjhb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbakjhb6m"/>`,
		"fallback": "hugeicons:chevrons-down-up",
	});
}

export default Component;
