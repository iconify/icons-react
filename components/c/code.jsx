import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze76x5b8t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze76x5b8t"/>`,
		"fallback": "bytesize:code",
	});
}

export default Component;
