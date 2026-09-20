import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdxt6vsyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdxt6vsyf"/>`,
		"fallback": "streamline-ultimate:airplane-mode-bold",
	});
}

export default Component;
