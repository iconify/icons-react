import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz2fdxb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz2fdxb4k"/>`,
		"fallback": "game-icons:claw",
	});
}

export default Component;
