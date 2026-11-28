import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlcua3j-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlcua3j-w"/>`,
		"fallback": "noviair-light:cactus",
	});
}

export default Component;
