import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aizmdx4bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aizmdx4bz"/>`,
		"fallback": "solar:folder-symlink-outline",
	});
}

export default Component;
