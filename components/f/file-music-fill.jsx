import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n01i9nsok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n01i9nsok"/>`,
		"fallback": "mingcute:file-music-fill",
	});
}

export default Component;
