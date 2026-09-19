import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szp3pvb8i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szp3pvb8i"/>`,
		"fallback": "game-icons:fire-punch",
	});
}

export default Component;
