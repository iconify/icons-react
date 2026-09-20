import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg5u1_b8w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg5u1_b8w"/>`,
		"fallback": "openmoji:heavy-circle",
	});
}

export default Component;
