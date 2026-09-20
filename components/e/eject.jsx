import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fy5awrtdb.css';
import '../../css/e/e59sg4gxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fy5awrtdb"/><rect class="e59sg4gxh"/></g>`,
		"fallback": "lucide:eject",
	});
}

export default Component;
