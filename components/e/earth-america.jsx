import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b890xw9rp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b890xw9rp"/>`,
		"fallback": "game-icons:earth-america",
	});
}

export default Component;
