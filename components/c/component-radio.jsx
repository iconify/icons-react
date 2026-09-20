import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n04szjpnk.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/t/th7l-mbxq.css';
import '../../css/a/a0ojm8b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n04szjpnk"/><path class="kf0_gw6sp"/><path class="th7l-mbxq"/><path class="a0ojm8b0m"/></g>`,
		"fallback": "tdesign:component-radio",
	});
}

export default Component;
