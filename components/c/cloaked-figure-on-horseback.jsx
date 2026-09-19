import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s73pzob8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s73pzob8j"/>`,
		"fallback": "game-icons:cloaked-figure-on-horseback",
	});
}

export default Component;
