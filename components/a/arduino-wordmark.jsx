import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sto5bkbur.css';
import '../../css/s/sxiy_gize.css';
import '../../css/e/epswth33l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sto5bkbur"><path class="sxiy_gize"/><path class="epswth33l"/></g>`,
		"fallback": "devicon:arduino-wordmark",
	});
}

export default Component;
