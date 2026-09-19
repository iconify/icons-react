import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne4uv0bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne4uv0bbf"/>`,
		"fallback": "bx:bxs-comment",
	});
}

export default Component;
