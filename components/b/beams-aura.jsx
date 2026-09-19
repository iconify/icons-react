import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p28nk78it.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p28nk78it"/>`,
		"fallback": "game-icons:beams-aura",
	});
}

export default Component;
