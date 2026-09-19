import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngqy7dzmk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngqy7dzmk"/>`,
		"fallback": "game-icons:black-knight-helm",
	});
}

export default Component;
