import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lutq6g-xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lutq6g-xq"/>`,
		"fallback": "solar:ghost-smile-bold",
	});
}

export default Component;
