import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-gb27b0k.css';
import '../../css/g/gaeyj1byx.css';
import '../../css/v/v-uis297t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-gb27b0k"/><path class="gaeyj1byx"/><path class="v-uis297t"/></g>`,
		"fallback": "streamline-color:epic-games-1",
	});
}

export default Component;
