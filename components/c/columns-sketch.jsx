import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k5t-zhrxr.css';
import '../../css/x/xnqho3vsb.css';
import '../../css/u/u5pkhhcvy.css';
import '../../css/g/g01svf7ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k5t-zhrxr wm-a"/><path class="wm-k xnqho3vsb"/><path class="u5pkhhcvy wm-k"/><path class="g01svf7ox wm-a"/></g>`,
		"fallback": "withicons:columns-sketch",
	});
}

export default Component;
