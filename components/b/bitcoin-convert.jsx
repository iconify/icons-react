import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-ut3mb7m.css';
import '../../css/t/t69um4bmx.css';
import '../../css/y/y6qv0pb5h.css';
import '../../css/w/wie0hy52g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f-ut3mb7m"/><path class="t69um4bmx"/><path class="y6qv0pb5h"/><path class="wie0hy52g"/></g>`,
		"fallback": "reicon:bitcoin-convert",
	});
}

export default Component;
