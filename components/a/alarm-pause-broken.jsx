import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x43s2zn6y.css';
import '../../css/p/pfllnjb4h.css';
import '../../css/a/aw4h_vb6l.css';
import '../../css/z/zbfd7gbum.css';
import '../../css/c/cfw654b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x43s2zn6y"/><path class="pfllnjb4h"/><path class="aw4h_vb6l"/><path class="zbfd7gbum"/><path class="cfw654b4b"/></g>`,
		"fallback": "solar:alarm-pause-broken",
	});
}

export default Component;
