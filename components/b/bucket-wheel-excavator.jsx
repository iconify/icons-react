import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b__1v4b4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b__1v4b4v"/>`,
		"fallback": "game-icons:bucket-wheel-excavator",
	});
}

export default Component;
