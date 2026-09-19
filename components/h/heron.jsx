import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu8u-vlrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu8u-vlrz"/>`,
		"fallback": "game-icons:heron",
	});
}

export default Component;
