import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f522zhbkk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f522zhbkk"/>`,
		"fallback": "fluent-mdl2:filter-settings",
	});
}

export default Component;
