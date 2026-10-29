import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogh3b21vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogh3b21vd"/>`,
		"fallback": "withicons:arrow-down-to-line-solid",
	});
}

export default Component;
