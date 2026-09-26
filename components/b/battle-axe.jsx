import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4lwgomsr.css';
import '../../css/f/fic3trtai.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x4lwgomsr"/><path class="fic3trtai"/></g>`,
		"fallback": "at-icons:battle-axe",
	});
}

export default Component;
