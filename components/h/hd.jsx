import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mzisylboo.css';
import '../../css/s/s-mjmbbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mzisylboo"/><path class="s-mjmbbtd"/></g>`,
		"fallback": "hugeicons:hd",
	});
}

export default Component;
