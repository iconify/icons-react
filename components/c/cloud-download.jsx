import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j6i35boai.css';
import '../../css/a/ackp18bsu.css';
import '../../css/g/gf-yneexw.css';
import '../../css/s/sy15m6baj.css';
import '../../css/n/nbbvhk-9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j6i35boai wm-shadow"/><path class="ackp18bsu wm-shadow"/><path class="gf-yneexw"/><path class="sy15m6baj"/><path class="nbbvhk-9z wm-s"/></g>`,
		"fallback": "withicons-brutal:cloud-download",
	});
}

export default Component;
