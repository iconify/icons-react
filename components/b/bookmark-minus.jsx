import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjebheb9k.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjebheb9k"/>`,
		"fallback": "jam:bookmark-minus",
	});
}

export default Component;
