import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s_ho3ac6o.css';
import '../../css/u/uybgto0ku.css';
import '../../css/t/trcn_rbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="s_ho3ac6o"/><path class="uybgto0ku"/><path class="trcn_rbat"/></g>`,
		"fallback": "iconoir:hexagon-dice",
	});
}

export default Component;
