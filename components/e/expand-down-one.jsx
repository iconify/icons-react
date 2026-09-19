import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z1618sbnc.css';
import '../../css/s/sl_6iq7_n.css';
import '../../css/k/kk9dm5zdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="z1618sbnc"/><path class="sl_6iq7_n"/><path class="kk9dm5zdk"/></g>`,
		"fallback": "icon-park:expand-down-one",
	});
}

export default Component;
