import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz4rlx_oy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz4rlx_oy"/>`,
		"fallback": "game-icons:incubator",
	});
}

export default Component;
