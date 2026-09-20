import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbr_c7bzt.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbr_c7bzt"/><path class="x1mdp195q"/>`,
		"fallback": "openmoji:blue-hexagon",
	});
}

export default Component;
