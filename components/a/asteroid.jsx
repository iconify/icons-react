import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elzqj98pv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elzqj98pv"/>`,
		"fallback": "game-icons:asteroid",
	});
}

export default Component;
