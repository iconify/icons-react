import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ar3r9kx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6ar3r9kx"/>`,
		"fallback": "osmic:greengrocer-14",
	});
}

export default Component;
