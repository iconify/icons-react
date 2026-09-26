import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/riqupybve.css';
import '../../css/l/lzttk4b4v.css';
import '../../css/c/crowf5bqr.css';
import '../../css/c/ca5314bjo.css';
import '../../css/d/dy1fr3e2o.css';
import '../../css/x/xp1wxg51f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="riqupybve"/><path clip-rule="evenodd" class="lzttk4b4v"/><path class="crowf5bqr"/><path class="ca5314bjo"/><path class="dy1fr3e2o"/><path class="xp1wxg51f"/></g>`,
		"fallback": "solar:balls-bold",
	});
}

export default Component;
