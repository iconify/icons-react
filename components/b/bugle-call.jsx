import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx7_61w8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx7_61w8u"/>`,
		"fallback": "game-icons:bugle-call",
	});
}

export default Component;
