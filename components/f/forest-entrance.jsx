import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohx_6lg8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohx_6lg8q"/>`,
		"fallback": "game-icons:forest-entrance",
	});
}

export default Component;
