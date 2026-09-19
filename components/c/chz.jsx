import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws7o0qx6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws7o0qx6j"/>`,
		"fallback": "cryptocurrency:chz",
	});
}

export default Component;
