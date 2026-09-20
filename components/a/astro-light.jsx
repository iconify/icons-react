import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1-5inbbl.css';

const viewBox = {"width":85,"height":107};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1-5inbbl"/>`,
		"fallback": "thesvg-color:astro-light",
	});
}

export default Component;
