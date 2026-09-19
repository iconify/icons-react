import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-ft2r-zd.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-ft2r-zd"/>`,
		"fallback": "zmdi:format-valign-center",
	});
}

export default Component;
