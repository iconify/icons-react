import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2nv7g9ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2nv7g9ps"/>`,
		"fallback": "mdi:cards-outline",
	});
}

export default Component;
