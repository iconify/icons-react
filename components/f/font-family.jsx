import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1a9pt74t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1a9pt74t"/>`,
		"fallback": "boxicons:font-family",
	});
}

export default Component;
