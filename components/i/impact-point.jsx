import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1a9i0b6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1a9i0b6n"/>`,
		"fallback": "game-icons:impact-point",
	});
}

export default Component;
