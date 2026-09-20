import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b57cg5bhx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b57cg5bhx"/>`,
		"fallback": "ix:emote-sad",
	});
}

export default Component;
