import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wsqq5lb5n.css';
import '../../css/z/zrd_a8b0h.css';
import '../../css/p/p-9u1qz1p.css';
import '../../css/j/jkw54tb-v.css';
import '../../css/a/akrwn6bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wsqq5lb5n"/><path class="wm-shadow zrd_a8b0h"/><path class="p-9u1qz1p"/><path class="jkw54tb-v"/><path class="akrwn6bek"/></g>`,
		"fallback": "withicons-brutal:hourglass",
	});
}

export default Component;
