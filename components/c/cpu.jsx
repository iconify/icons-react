import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db4q_oyyz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db4q_oyyz"/>`,
		"fallback": "picon:cpu",
	});
}

export default Component;
