import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hws3f-bge.css';
import '../../css/x/x3forobtf.css';
import '../../css/r/r1s08cvrn.css';
import '../../css/e/eqj0kqn9h.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hws3f-bge wm-shadow"/><path class="wm-shadow x3forobtf"/><path class="r1s08cvrn"/><path class="eqj0kqn9h"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:heart-off",
	});
}

export default Component;
