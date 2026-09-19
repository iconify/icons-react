import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfj8gvdlk.css';
import '../../css/v/vlqkedb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfj8gvdlk"/><path class="vlqkedb5t"/>`,
		"fallback": "circum:image-on",
	});
}

export default Component;
