import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1bb8rb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1bb8rb3t"/>`,
		"fallback": "noviair:flame-off",
	});
}

export default Component;
