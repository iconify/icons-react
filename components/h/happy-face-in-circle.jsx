import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1bue927j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1bue927j"/>`,
		"fallback": "pinhead:happy-face-in-circle",
	});
}

export default Component;
