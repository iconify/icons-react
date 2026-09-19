import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht0r95bfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht0r95bfn"/>`,
		"fallback": "game-icons:crown",
	});
}

export default Component;
