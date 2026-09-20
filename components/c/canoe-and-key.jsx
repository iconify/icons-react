import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/who-i1bbb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="who-i1bbb"/>`,
		"fallback": "pinhead:canoe-and-key",
	});
}

export default Component;
