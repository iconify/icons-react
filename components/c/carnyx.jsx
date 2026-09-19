import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pba9wvbwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pba9wvbwd"/>`,
		"fallback": "game-icons:carnyx",
	});
}

export default Component;
