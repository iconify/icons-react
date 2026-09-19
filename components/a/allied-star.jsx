import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaufy1uke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaufy1uke"/>`,
		"fallback": "game-icons:allied-star",
	});
}

export default Component;
