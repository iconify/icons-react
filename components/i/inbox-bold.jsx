import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vw_27nbpk.css';
import '../../css/f/fwspfsbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vw_27nbpk"/><path class="fwspfsbym"/></g>`,
		"fallback": "solar:inbox-bold",
	});
}

export default Component;
