import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybfag4d8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybfag4d8w"/>`,
		"fallback": "solar:folder-symlink-bold",
	});
}

export default Component;
