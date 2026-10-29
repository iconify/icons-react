import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fmncyfc7f.css';
import '../../css/l/loqvx9bru.css';
import '../../css/j/js7dzdb1b.css';
import '../../css/w/wg1teybho.css';
import '../../css/e/elay6zb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fmncyfc7f wm-k"/><path class="loqvx9bru wm-s"/><path class="js7dzdb1b"/><path class="wg1teybho"/><path class="elay6zb7q wm-s"/></g>`,
		"fallback": "withicons-bauhaus:clipboard-pen",
	});
}

export default Component;
