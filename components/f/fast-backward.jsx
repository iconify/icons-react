import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmhk9_7ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmhk9_7ye"/>`,
		"fallback": "fe:fast-backward",
	});
}

export default Component;
