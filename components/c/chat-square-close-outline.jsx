import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf9vpac5p.css';
import '../../css/u/um_zvyb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf9vpac5p"/><path clip-rule="evenodd" class="um_zvyb1k"/>`,
		"fallback": "solar:chat-square-close-outline",
	});
}

export default Component;
