import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aki4zgn5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aki4zgn5y"/>`,
		"fallback": "game-icons:beast-eye",
	});
}

export default Component;
