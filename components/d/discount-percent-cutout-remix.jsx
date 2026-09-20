import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sza43pt6q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sza43pt6q"/>`,
		"fallback": "streamline:discount-percent-cutout-remix",
	});
}

export default Component;
