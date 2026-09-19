import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk68y1fno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk68y1fno"/>`,
		"fallback": "game-icons:coal-wagon",
	});
}

export default Component;
