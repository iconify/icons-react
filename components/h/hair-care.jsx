import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u50lzsunm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u50lzsunm"/>`,
		"fallback": "temaki:hair-care",
	});
}

export default Component;
