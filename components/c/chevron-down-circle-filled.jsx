import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfg6e8b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfg6e8b5q"/>`,
		"fallback": "boxicons:chevron-down-circle-filled",
	});
}

export default Component;
