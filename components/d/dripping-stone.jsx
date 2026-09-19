import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3u9lnadn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3u9lnadn"/>`,
		"fallback": "game-icons:dripping-stone",
	});
}

export default Component;
