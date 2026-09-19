import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayu2mebcq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayu2mebcq"/>`,
		"fallback": "game-icons:dolphin",
	});
}

export default Component;
