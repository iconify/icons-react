import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbq16f0me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbq16f0me"/>`,
		"fallback": "thesvg-color:atlasos",
	});
}

export default Component;
