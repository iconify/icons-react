import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0m8mmivq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0m8mmivq"/>`,
		"fallback": "game-icons:hill-fort",
	});
}

export default Component;
