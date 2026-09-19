import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehhu9f5ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehhu9f5ds"/>`,
		"fallback": "bx:bxs-right-top-arrow-circle",
	});
}

export default Component;
