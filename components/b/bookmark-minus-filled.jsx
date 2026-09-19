import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpe3d1buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpe3d1buq"/>`,
		"fallback": "griddy-icons:bookmark-minus-filled",
	});
}

export default Component;
