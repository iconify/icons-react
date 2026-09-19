import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1g6zcb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1g6zcb3c"/>`,
		"fallback": "hugeicons:arrange-by-numbers-9-1",
	});
}

export default Component;
