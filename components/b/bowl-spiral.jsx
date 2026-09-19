import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im916tbmp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im916tbmp"/>`,
		"fallback": "game-icons:bowl-spiral",
	});
}

export default Component;
