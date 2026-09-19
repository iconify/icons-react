import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu328sq7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu328sq7v"/>`,
		"fallback": "game-icons:butter-toast",
	});
}

export default Component;
