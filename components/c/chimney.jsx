import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mn8w30d0i.css';
import '../../css/s/st9u1u3tq.css';
import '../../css/h/h8ey_rjec.css';
import '../../css/z/zi7nydz_s.css';
import '../../css/r/rcdnxiqxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mn8w30d0i"/><path class="st9u1u3tq"/><path class="h8ey_rjec"/><path class="zi7nydz_s"/><path class="rcdnxiqxf"/></g>`,
		"fallback": "icon-park-outline:chimney",
	});
}

export default Component;
