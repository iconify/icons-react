import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1f2_ib4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1f2_ib4t"/>`,
		"fallback": "game-icons:ceiling-light",
	});
}

export default Component;
