import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifrgh_bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifrgh_bsa"/>`,
		"fallback": "mdi:format-vertical-align-top",
	});
}

export default Component;
