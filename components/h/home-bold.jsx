import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gllq9sb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gllq9sb3n"/>`,
		"fallback": "iconamoon:home-bold",
	});
}

export default Component;
