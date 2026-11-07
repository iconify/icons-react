import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4my-sbai.css';
import '../../css/j/ja6qjjbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4my-sbai"/><path class="ja6qjjbzi"/>`,
		"fallback": "solar:bookmark-opened-bold",
	});
}

export default Component;
