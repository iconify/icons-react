import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow16voj6k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow16voj6k"/>`,
		"fallback": "game-icons:duck-palm",
	});
}

export default Component;
