import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x2c5n0b5c.css';
import '../../css/v/vviflib-v.css';
import '../../css/r/rftda5vjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x2c5n0b5c"/><path class="vviflib-v wm-a"/><path class="rftda5vjf wm-s"/></g>`,
		"fallback": "withicons:gulal-solid",
	});
}

export default Component;
