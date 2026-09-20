import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw5c2y68q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw5c2y68q"/>`,
		"fallback": "oi:arrow-circle-right",
	});
}

export default Component;
