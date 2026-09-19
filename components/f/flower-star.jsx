import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgngxdb7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgngxdb7j"/>`,
		"fallback": "game-icons:flower-star",
	});
}

export default Component;
