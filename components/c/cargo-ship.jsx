import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky_qdhb1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky_qdhb1r"/>`,
		"fallback": "game-icons:cargo-ship",
	});
}

export default Component;
