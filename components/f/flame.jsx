import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg4z99bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg4z99bna"/>`,
		"fallback": "lucide:flame",
	});
}

export default Component;
