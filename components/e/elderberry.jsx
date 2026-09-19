import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3j8hc2km.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3j8hc2km"/>`,
		"fallback": "game-icons:elderberry",
	});
}

export default Component;
