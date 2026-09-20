import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rumij6bmt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rumij6bmt"/>`,
		"fallback": "zondicons:arrow-thick-right",
	});
}

export default Component;
