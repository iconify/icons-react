import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hagegybhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hagegybhq"/>`,
		"fallback": "noviair-light:bookmark-x",
	});
}

export default Component;
