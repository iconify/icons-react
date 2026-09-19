import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvw95zb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvw95zb6n"/>`,
		"fallback": "hugeicons:bookmark-remove-02",
	});
}

export default Component;
