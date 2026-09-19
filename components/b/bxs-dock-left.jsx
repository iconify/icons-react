import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsh3mybya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsh3mybya"/>`,
		"fallback": "bx:bxs-dock-left",
	});
}

export default Component;
