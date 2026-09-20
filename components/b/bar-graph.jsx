import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/elns7ebwh.css';
import '../../css/w/w-_t-lb4p.css';
import '../../css/l/l_1wr2zvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="elns7ebwh"/><rect class="w-_t-lb4p"/><rect class="l_1wr2zvp"/></g>`,
		"fallback": "proicons:bar-graph",
	});
}

export default Component;
