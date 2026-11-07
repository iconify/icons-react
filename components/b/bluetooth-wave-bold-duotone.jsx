import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx30rnqyk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/l8s031fwy.css';
import '../../css/s/sgu_fyztv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx30rnqyk"/><g class="xtpeb-edw"><path class="l8s031fwy"/><path class="sgu_fyztv"/></g>`,
		"fallback": "solar:bluetooth-wave-bold-duotone",
	});
}

export default Component;
