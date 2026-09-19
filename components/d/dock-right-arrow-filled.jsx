import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xczuevcqe.css';
import '../../css/p/pq0jslbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xczuevcqe"/><path class="pq0jslbzi"/>`,
		"fallback": "boxicons:dock-right-arrow-filled",
	});
}

export default Component;
