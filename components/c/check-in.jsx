import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pf0x76bar.css';
import '../../css/h/hb2a8jbpb.css';
import '../../css/d/d8xgs9k4y.css';
import '../../css/m/mdmh3_bpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pf0x76bar"/><path class="hb2a8jbpb"/><path class="d8xgs9k4y"/><path class="mdmh3_bpt"/></g>`,
		"fallback": "icon-park:check-in",
	});
}

export default Component;
