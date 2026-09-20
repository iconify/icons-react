import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdvd8x__s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdvd8x__s"/>`,
		"fallback": "mdi:document",
	});
}

export default Component;
