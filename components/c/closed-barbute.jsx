import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx0yfxh_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx0yfxh_h"/>`,
		"fallback": "game-icons:closed-barbute",
	});
}

export default Component;
