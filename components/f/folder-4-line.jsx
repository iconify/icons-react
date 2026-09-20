import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm3u1cb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm3u1cb6z"/>`,
		"fallback": "ri:folder-4-line",
	});
}

export default Component;
