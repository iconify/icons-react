import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d62yhwbpd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d62yhwbpd"/>`,
		"fallback": "game-icons:chisel",
	});
}

export default Component;
