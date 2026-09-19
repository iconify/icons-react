import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wntb91h_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wntb91h_z"/>`,
		"fallback": "icons8:electricity",
	});
}

export default Component;
