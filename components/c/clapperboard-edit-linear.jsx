import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1559hbqt.css';
import '../../css/r/rcdawhb0x.css';
import '../../css/n/nw4q19_ui.css';
import '../../css/g/gkfk6p_mj.css';
import '../../css/u/udkm02blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x1559hbqt"/><path class="rcdawhb0x"/><path class="nw4q19_ui"/><path class="gkfk6p_mj"/><path class="udkm02blq"/></g>`,
		"fallback": "solar:clapperboard-edit-linear",
	});
}

export default Component;
