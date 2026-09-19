import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq6c9lvbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq6c9lvbs"/>`,
		"fallback": "game-icons:ice-cube",
	});
}

export default Component;
