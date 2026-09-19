import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up79a5b1b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up79a5b1b"/>`,
		"fallback": "ep:home-filled",
	});
}

export default Component;
