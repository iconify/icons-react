import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ff4jdybea.css';
import '../../css/g/gtbtb4krd.css';
import '../../css/g/gqeu1eb-b.css';
import '../../css/p/p-js957rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ff4jdybea wm-k"/><path class="gtbtb4krd wm-a"/><path class="gqeu1eb-b wm-k"/><path class="p-js957rr wm-a"/></g>`,
		"fallback": "withicons:burger-sketch",
	});
}

export default Component;
