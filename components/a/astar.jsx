import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n83zn_bzc.css';
import '../../css/d/dbpj__cre.css';
import '../../css/m/mgi0k9bwq.css';
import '../../css/h/hu8xdko9s.css';
import '../../css/s/s-mc1cvtu.css';
import '../../css/d/d0fwjyg_x.css';
import '../../css/z/zb0y1gryd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n83zn_bzc"/><path class="dbpj__cre"/><path class="mgi0k9bwq"/><path class="hu8xdko9s"/><path class="s-mc1cvtu"/><path class="d0fwjyg_x"/><path class="zb0y1gryd"/>`,
		"fallback": "token:astar",
	});
}

export default Component;
