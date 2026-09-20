import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b527d3b3t.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b527d3b3t"/><path class="x1mdp195q"/>`,
		"fallback": "openmoji:green-hexagon",
	});
}

export default Component;
