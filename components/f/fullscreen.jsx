import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y97f60bmx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y97f60bmx"/>`,
		"fallback": "bytesize:fullscreen",
	});
}

export default Component;
