import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9vm-c55o.css';
import '../../css/c/coboeh8eb.css';
import '../../css/c/cupcblbeg.css';
import '../../css/v/vrfvb-uky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9vm-c55o"/><path class="coboeh8eb"/><path class="cupcblbeg"/><path class="vrfvb-uky"/></g>`,
		"fallback": "tdesign:course",
	});
}

export default Component;
