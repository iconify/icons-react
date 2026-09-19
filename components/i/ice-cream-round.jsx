import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek81er-1d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek81er-1d"/>`,
		"fallback": "ep:ice-cream-round",
	});
}

export default Component;
