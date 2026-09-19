import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcs5uccjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcs5uccjy"/>`,
		"fallback": "game-icons:arch-bridge",
	});
}

export default Component;
