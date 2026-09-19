import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8m4j_b_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8m4j_b_m"/>`,
		"fallback": "game-icons:forklift",
	});
}

export default Component;
