import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ybut5hbil.css';
import '../../css/l/lktoiubne.css';
import '../../css/j/jr0ql2j0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ybut5hbil"/><path class="lktoiubne"/><path class="jr0ql2j0k"/></g>`,
		"fallback": "icon-park:afferent-three",
	});
}

export default Component;
