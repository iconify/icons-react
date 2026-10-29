import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f8kxdpb_h.css';
import '../../css/e/ev6-t-xbj.css';
import '../../css/f/f1iyce6_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f8kxdpb_h"/><path class="ev6-t-xbj wm-a"/><path class="f1iyce6_y"/></g>`,
		"fallback": "withicons:cube-duo",
	});
}

export default Component;
