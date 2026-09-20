import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frx5_9vue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frx5_9vue"/>`,
		"fallback": "pixelarticons:file-delete",
	});
}

export default Component;
