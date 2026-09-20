import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w15e0wb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w15e0wb7h"/>`,
		"fallback": "pixelarticons:git-merge",
	});
}

export default Component;
