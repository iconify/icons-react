import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l36ys2b-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l36ys2b-n"/>`,
		"fallback": "game-icons:fish-monster",
	});
}

export default Component;
