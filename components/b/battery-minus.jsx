import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg3ro6b2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg3ro6b2i"/>`,
		"fallback": "game-icons:battery-minus",
	});
}

export default Component;
