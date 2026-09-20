import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz3ot1u3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pz3ot1u3z"/>`,
		"fallback": "majesticons:bookmark-plus",
	});
}

export default Component;
