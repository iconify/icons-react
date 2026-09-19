import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tncbkw9vy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tncbkw9vy"/>`,
		"fallback": "game-icons:barbed-sun",
	});
}

export default Component;
