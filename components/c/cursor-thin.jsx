import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxg9tc2er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxg9tc2er"/>`,
		"fallback": "iconamoon:cursor-thin",
	});
}

export default Component;
