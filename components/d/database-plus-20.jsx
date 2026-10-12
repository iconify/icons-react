import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_na6f67p.css';
import '../../css/h/h00pihbwp.css';
import '../../css/q/qlmtywbwn.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_na6f67p"/><path class="h00pihbwp"/><path class="qlmtywbwn"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:database-plus-20",
	});
}

export default Component;
