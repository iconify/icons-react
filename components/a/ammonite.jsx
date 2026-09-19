import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1c5jzgok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1c5jzgok"/>`,
		"fallback": "game-icons:ammonite",
	});
}

export default Component;
