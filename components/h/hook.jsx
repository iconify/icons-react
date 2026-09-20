import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkbw6_bzt.css';
import '../../css/t/toym7nb7v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkbw6_bzt"/><path class="toym7nb7v"/>`,
		"fallback": "openmoji:hook",
	});
}

export default Component;
