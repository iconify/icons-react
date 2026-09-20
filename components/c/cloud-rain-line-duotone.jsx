import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ty35h9b_q.css';
import '../../css/v/vbgcwqb6e.css';
import '../../css/b/bi7mdqb8a.css';
import '../../css/t/tkzm_abvq.css';
import '../../css/t/to23gco_r.css';
import '../../css/n/nja6m3bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ty35h9b_q"/><path class="vbgcwqb6e"/><path class="bi7mdqb8a"/><path class="tkzm_abvq"/><path class="to23gco_r"/><path class="nja6m3bms"/></g>`,
		"fallback": "solar:cloud-rain-line-duotone",
	});
}

export default Component;
