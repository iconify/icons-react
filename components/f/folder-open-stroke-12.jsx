import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u3dz0ebsu.css';
import '../../css/e/ewajv7b-q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="u3dz0ebsu"/><path class="ewajv7b-q"/></g>`,
		"fallback": "garden:folder-open-stroke-12",
	});
}

export default Component;
