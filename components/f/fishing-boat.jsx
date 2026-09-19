import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5q0sh-om.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5q0sh-om"/>`,
		"fallback": "game-icons:fishing-boat",
	});
}

export default Component;
