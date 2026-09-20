import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b06lthj3q.css';
import '../../css/n/n53p5tb4g.css';
import '../../css/w/ww44234at.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/iqcnmwb8n.css';
import '../../css/w/wcq5hacko.css';
import '../../css/i/i__1fp6bh.css';
import '../../css/e/e5bfsusbk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b06lthj3q"/><path class="n53p5tb4g"/><path class="ww44234at"/><g class="ij2x_72vy"><path class="iqcnmwb8n"/><path class="wcq5hacko"/><path class="i__1fp6bh"/><path class="e5bfsusbk"/></g>`,
		"fallback": "openmoji:doe",
	});
}

export default Component;
