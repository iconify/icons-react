import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/e/e4yddk8qb.css';
import '../../css/w/w66q37m7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="e4yddk8qb"/><path class="w66q37m7c"/></g>`,
		"fallback": "icon-park-outline:drop-shadow-down",
	});
}

export default Component;
