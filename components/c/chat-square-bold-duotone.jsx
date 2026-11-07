import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i45zppjnu.css';
import '../../css/u/u4oiq_b1p.css';
import '../../css/y/yil3q6l6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i45zppjnu"/><path clip-rule="evenodd" class="u4oiq_b1p"/><path class="yil3q6l6s"/>`,
		"fallback": "solar:chat-square-bold-duotone",
	});
}

export default Component;
