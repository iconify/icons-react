import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt9ixm04t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt9ixm04t"/>`,
		"fallback": "game-icons:ant",
	});
}

export default Component;
