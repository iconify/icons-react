import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzkv-7bal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzkv-7bal"/>`,
		"fallback": "game-icons:desert-camp",
	});
}

export default Component;
