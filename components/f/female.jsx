import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg-0zhwkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg-0zhwkh"/>`,
		"fallback": "game-icons:female",
	});
}

export default Component;
