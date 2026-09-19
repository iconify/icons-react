import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afocu7s4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afocu7s4u"/>`,
		"fallback": "humbleicons:fork-knife",
	});
}

export default Component;
