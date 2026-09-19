import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikuw9ybyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikuw9ybyc"/>`,
		"fallback": "game-icons:clay-brick",
	});
}

export default Component;
