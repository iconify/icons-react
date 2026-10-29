import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xk2i9cb9l.css';
import '../../css/f/f5h9bqb3b.css';
import '../../css/s/sa73k2b9u.css';
import '../../css/d/d6bk21--u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xk2i9cb9l"/><path class="f5h9bqb3b wm-a"/><path class="sa73k2b9u wm-k"/><path class="d6bk21--u wm-a"/></g>`,
		"fallback": "withicons:circle-pause-sketch",
	});
}

export default Component;
