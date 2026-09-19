import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi6j4pa6v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pi6j4pa6v"/>`,
		"fallback": "glyphs:hand-middle-outline",
	});
}

export default Component;
