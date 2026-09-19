import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4s5k1myl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4s5k1myl"/>`,
		"fallback": "game-icons:bastet",
	});
}

export default Component;
