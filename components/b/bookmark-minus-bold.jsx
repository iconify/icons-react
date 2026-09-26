import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2fpl2orn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2fpl2orn"/>`,
		"fallback": "solar:bookmark-minus-bold",
	});
}

export default Component;
