import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj-g8ac3z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj-g8ac3z"/>`,
		"fallback": "bytesize:export",
	});
}

export default Component;
