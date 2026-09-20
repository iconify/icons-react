import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2n3k_blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2n3k_blu"/>`,
		"fallback": "uil:history-alt",
	});
}

export default Component;
