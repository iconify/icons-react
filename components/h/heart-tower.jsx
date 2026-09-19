import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g90x1bbuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g90x1bbuy"/>`,
		"fallback": "game-icons:heart-tower",
	});
}

export default Component;
