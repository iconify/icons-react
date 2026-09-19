import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9a2xk5uq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9a2xk5uq"/>`,
		"fallback": "game-icons:cricket-bat",
	});
}

export default Component;
