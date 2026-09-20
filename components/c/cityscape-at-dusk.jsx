import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhcegirck.css';
import '../../css/t/tvsgro1em.css';
import '../../css/d/drxr40zhq.css';
import '../../css/u/usf082bfs.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fmnajwb8e.css';
import '../../css/c/c3e7qe6ix.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhcegirck"/><path class="tvsgro1em"/><path class="drxr40zhq"/><path class="usf082bfs"/><g class="jn8qy4bru"><path class="fmnajwb8e"/><path class="c3e7qe6ix"/></g>`,
		"fallback": "openmoji:cityscape-at-dusk",
	});
}

export default Component;
