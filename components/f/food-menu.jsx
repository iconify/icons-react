import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fm-rif3xk.css';
import '../../css/i/idvo9fb6s.css';
import '../../css/w/w9l6ldbso.css';
import '../../css/o/ofme4dblq.css';
import '../../css/b/b92mmibeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fm-rif3xk"/><path class="idvo9fb6s"/><path class="w9l6ldbso"/><path class="ofme4dblq"/><path class="b92mmibeq"/></g>`,
		"fallback": "matita:food-menu",
	});
}

export default Component;
