import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwzl1fkot.css';
import '../../css/m/mye8w2bqk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nzou8ob_j.css';
import '../../css/d/dq091-iyu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwzl1fkot"/><path class="mye8w2bqk"/><g class="jn8qy4bru"><path class="nzou8ob_j"/><path class="dq091-iyu"/></g>`,
		"fallback": "openmoji:file-folder",
	});
}

export default Component;
