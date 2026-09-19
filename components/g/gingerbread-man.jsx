import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0w1066od.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0w1066od"/>`,
		"fallback": "game-icons:gingerbread-man",
	});
}

export default Component;
