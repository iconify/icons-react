import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cncna5pxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cncna5pxb"/>`,
		"fallback": "mdi:format-letter-matches",
	});
}

export default Component;
