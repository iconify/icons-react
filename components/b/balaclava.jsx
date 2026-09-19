import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b923_bb_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b923_bb_b"/>`,
		"fallback": "game-icons:balaclava",
	});
}

export default Component;
