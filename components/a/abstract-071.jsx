import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdw3qmbrq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdw3qmbrq"/>`,
		"fallback": "game-icons:abstract-071",
	});
}

export default Component;
