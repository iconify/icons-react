import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t-p51h91p.css';
import '../../css/a/as3iy2a9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t-p51h91p"/><path class="as3iy2a9a wm-a"/></g>`,
		"fallback": "withicons:cloud-fog-solid",
	});
}

export default Component;
