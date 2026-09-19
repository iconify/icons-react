import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjuu2tb9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjuu2tb9b"/>`,
		"fallback": "game-icons:bonsai-tree",
	});
}

export default Component;
