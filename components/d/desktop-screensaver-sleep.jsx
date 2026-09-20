import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vl62orbzq.css';
import '../../css/y/y7ca-5l_i.css';
import '../../css/s/suur1dntm.css';
import '../../css/c/cq12y0bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vl62orbzq"/><path class="y7ca-5l_i"/><path class="suur1dntm"/><path class="cq12y0bxr"/></g>`,
		"fallback": "streamline-sharp-color:desktop-screensaver-sleep",
	});
}

export default Component;
