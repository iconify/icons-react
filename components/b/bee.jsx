import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl_51bbzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl_51bbzv"/>`,
		"fallback": "game-icons:bee",
	});
}

export default Component;
