import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/g/giwrxbc9c.css';
import '../../css/f/f589aobdb.css';
import '../../css/i/i278szqpx.css';
import '../../css/y/y-0yi6qaz.css';
import '../../css/m/mo5netbri.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g transform="translate(3 3)"><rect class="giwrxbc9c"/><path clip-rule="evenodd" class="f589aobdb"/><path clip-rule="evenodd" class="i278szqpx"/><path class="y-0yi6qaz"/><path class="mo5netbri"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:calendar-circle-off",
	});
}

export default Component;
