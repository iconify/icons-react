import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxuh4t3_e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w10tlo1bi.css';
import '../../css/n/nb7gx3byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxuh4t3_e"/><g class="xtpeb-edw"><path class="w10tlo1bi"/><path class="nb7gx3byg"/></g>`,
		"fallback": "solar:arrow-to-top-left-bold-duotone",
	});
}

export default Component;
