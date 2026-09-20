import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1mst_bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1mst_bla"/>`,
		"fallback": "lets-icons:arrow-right-light",
	});
}

export default Component;
