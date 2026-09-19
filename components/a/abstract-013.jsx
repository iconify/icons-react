import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_daflb-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_daflb-p"/>`,
		"fallback": "game-icons:abstract-013",
	});
}

export default Component;
