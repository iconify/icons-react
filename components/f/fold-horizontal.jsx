import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npc8rjpju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npc8rjpju"/>`,
		"fallback": "hugeicons:fold-horizontal",
	});
}

export default Component;
