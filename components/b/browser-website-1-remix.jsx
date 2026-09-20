import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7s8iu7on.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x7s8iu7on"/>`,
		"fallback": "streamline:browser-website-1-remix",
	});
}

export default Component;
