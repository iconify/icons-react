import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1707cbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1707cbcb"/>`,
		"fallback": "tabler:filter-2-up",
	});
}

export default Component;
