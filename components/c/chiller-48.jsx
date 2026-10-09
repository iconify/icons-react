import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7olx61gw.css';
import '../../css/r/rm-okbbyz.css';
import '../../css/t/t7yb8ybvd.css';
import '../../css/k/kwtxaxb-s.css';
import '../../css/u/urikaqb0x.css';
import '../../css/h/hf_5s8bfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7olx61gw"/><path class="rm-okbbyz"/><path class="t7yb8ybvd"/><path class="kwtxaxb-s"/><path class="urikaqb0x"/><path class="hf_5s8bfz"/>`,
		"fallback": "energy-icons:chiller-48",
	});
}

export default Component;
