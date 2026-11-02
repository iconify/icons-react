import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjng15r9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjng15r9s"/>`,
		"fallback": "mingcute:folder-heart-line",
	});
}

export default Component;
