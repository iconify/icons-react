import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oz051ac_l.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oz051ac_l"/><path class="imo26mlcc"/></g>`,
		"fallback": "tabler:device-ipad-heart",
	});
}

export default Component;
