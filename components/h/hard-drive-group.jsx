import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi28gi9tm.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi28gi9tm"/>`,
		"fallback": "fluent-mdl2:hard-drive-group",
	});
}

export default Component;
