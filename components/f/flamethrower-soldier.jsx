import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed2g01b9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed2g01b9v"/>`,
		"fallback": "game-icons:flamethrower-soldier",
	});
}

export default Component;
