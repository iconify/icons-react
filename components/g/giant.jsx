import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkky4_b_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkky4_b_l"/>`,
		"fallback": "game-icons:giant",
	});
}

export default Component;
