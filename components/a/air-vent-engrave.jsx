import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qp1wmjbgs.css';
import '../../css/a/a7nzgbnmk.css';
import '../../css/m/miccu2bbd.css';
import '../../css/j/j1_apjast.css';
import '../../css/g/gn83_cb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qp1wmjbgs wm-k"/><path class="a7nzgbnmk wm-a"/><path class="miccu2bbd wm-shadow"/><path class="j1_apjast wm-k"/><path class="gn83_cb7i wm-a"/></g>`,
		"fallback": "withicons:air-vent-engrave",
	});
}

export default Component;
