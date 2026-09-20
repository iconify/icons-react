import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_0lkt0mb.css';
import '../../css/m/m6pddwb-m.css';
import '../../css/w/wj97oilvm.css';
import '../../css/h/h5jdbcchz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p_0lkt0mb"/><path class="m6pddwb-m"/><path clip-rule="evenodd" class="wj97oilvm"/><path class="h5jdbcchz"/></g>`,
		"fallback": "reicon:calendar-date-duotone",
	});
}

export default Component;
