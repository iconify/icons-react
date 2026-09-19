import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz9ys0aib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz9ys0aib"/>`,
		"fallback": "game-icons:eye-shield",
	});
}

export default Component;
