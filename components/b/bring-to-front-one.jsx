import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gw7h7qb1v.css';
import '../../css/t/ty4_4y0jy.css';
import '../../css/c/cyiud2sjn.css';
import '../../css/u/u2tz_pc4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="gw7h7qb1v"/><path class="ty4_4y0jy"/><path class="cyiud2sjn"/><path class="u2tz_pc4q"/></g>`,
		"fallback": "icon-park:bring-to-front-one",
	});
}

export default Component;
