import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apuxwubrk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apuxwubrk"/>`,
		"fallback": "game-icons:archer",
	});
}

export default Component;
