import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnt4rgbuc.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnt4rgbuc"/><path class="x1mdp195q"/>`,
		"fallback": "openmoji:brown-hexagon",
	});
}

export default Component;
