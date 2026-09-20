import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psoz5jj8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psoz5jj8b"/>`,
		"fallback": "mdi:graph-timeline",
	});
}

export default Component;
