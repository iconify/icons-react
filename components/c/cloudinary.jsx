import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1fe2wnqk.css';

const viewBox = {"width":256,"height":168};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1fe2wnqk"/>`,
		"fallback": "thesvg-color:cloudinary",
	});
}

export default Component;
