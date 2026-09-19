import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2opjvf9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2opjvf9e"/>`,
		"fallback": "game-icons:cargo-crane",
	});
}

export default Component;
