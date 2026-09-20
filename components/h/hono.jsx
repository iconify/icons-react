import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhzw_ibjg.css';
import '../../css/f/fudbgdb1t.css';

const viewBox = {"width":256,"height":330};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhzw_ibjg"/><path class="fudbgdb1t"/>`,
		"fallback": "thesvg-color:hono",
	});
}

export default Component;
