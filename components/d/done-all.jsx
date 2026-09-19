import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r29jg_xby.css';
import '../../css/i/iggjj_s5s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r29jg_xby"/><path class="iggjj_s5s"/></g>`,
		"fallback": "icon-park:done-all",
	});
}

export default Component;
