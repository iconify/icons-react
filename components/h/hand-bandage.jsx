import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swbr1du4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swbr1du4m"/>`,
		"fallback": "game-icons:hand-bandage",
	});
}

export default Component;
