import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-g5kwbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-g5kwbik"/>`,
		"fallback": "mingcute:homepod-mini-line",
	});
}

export default Component;
