import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8lp-bu2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8lp-bu2q"/>`,
		"fallback": "game-icons:brandy-bottle",
	});
}

export default Component;
