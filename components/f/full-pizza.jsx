import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaeag1s_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaeag1s_k"/>`,
		"fallback": "game-icons:full-pizza",
	});
}

export default Component;
