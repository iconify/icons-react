import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd-hzyb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd-hzyb0m"/>`,
		"fallback": "game-icons:cheerful",
	});
}

export default Component;
