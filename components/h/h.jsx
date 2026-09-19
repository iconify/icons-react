import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hmhethf3g.css';
import '../../css/e/evz31rqer.css';
import '../../css/z/z4tkxcc3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hmhethf3g"/><path class="evz31rqer"/><path class="z4tkxcc3q"/></g>`,
		"fallback": "icon-park:h",
	});
}

export default Component;
