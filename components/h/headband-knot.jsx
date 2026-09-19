import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf_12gmma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf_12gmma"/>`,
		"fallback": "game-icons:headband-knot",
	});
}

export default Component;
