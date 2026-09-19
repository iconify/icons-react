import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l82b-3bxw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l82b-3bxw"/>`,
		"fallback": "game-icons:fall-down",
	});
}

export default Component;
