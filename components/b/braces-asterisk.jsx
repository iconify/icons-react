import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f10s-hb0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f10s-hb0z"/>`,
		"fallback": "bi:braces-asterisk",
	});
}

export default Component;
