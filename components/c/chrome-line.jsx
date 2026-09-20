import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im8el_gaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im8el_gaf"/>`,
		"fallback": "ri:chrome-line",
	});
}

export default Component;
