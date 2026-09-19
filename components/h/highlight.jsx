import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywzk8rb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywzk8rb6w"/>`,
		"fallback": "boxicons:highlight",
	});
}

export default Component;
