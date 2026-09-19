import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u26p2qdhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u26p2qdhu"/>`,
		"fallback": "game-icons:falling-boulder",
	});
}

export default Component;
