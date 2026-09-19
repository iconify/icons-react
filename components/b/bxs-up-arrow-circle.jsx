import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm4e9_79y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm4e9_79y"/>`,
		"fallback": "bx:bxs-up-arrow-circle",
	});
}

export default Component;
