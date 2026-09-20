import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma5l8hb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma5l8hb8x"/>`,
		"fallback": "ri:creative-commons-nd-line",
	});
}

export default Component;
