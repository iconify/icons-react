import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh9lg8b5z.css';

const viewBox = {"width":401,"height":401};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh9lg8b5z"/>`,
		"fallback": "thesvg-color:deno-light",
	});
}

export default Component;
