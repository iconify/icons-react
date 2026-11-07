import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p91k6tbgq.css';
import '../../css/t/tuxrhtbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p91k6tbgq"/><path clip-rule="evenodd" class="tuxrhtbjg"/>`,
		"fallback": "solar:archive-close-outline",
	});
}

export default Component;
