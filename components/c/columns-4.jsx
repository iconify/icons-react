import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6_06_per.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6_06_per"/>`,
		"fallback": "boxicons:columns-4",
	});
}

export default Component;
