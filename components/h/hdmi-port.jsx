import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tsj65-z-p.css';
import '../../css/m/mzisylboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tsj65-z-p"/><path class="mzisylboo"/></g>`,
		"fallback": "hugeicons:hdmi-port",
	});
}

export default Component;
