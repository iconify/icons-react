import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jhua228yh.css';
import '../../css/q/qshbrhxgm.css';
import '../../css/m/mnpe1pxkt.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jhua228yh wm-k"/><path class="qshbrhxgm"/><path class="mnpe1pxkt"/><path class="ohtj0i3jo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:bug-off",
	});
}

export default Component;
