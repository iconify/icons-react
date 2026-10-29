import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gevz7ubpc.css';
import '../../css/y/ycgf2ek7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gevz7ubpc"/><path class="wm-a ycgf2ek7e"/></g>`,
		"fallback": "withicons:coffee-solid",
	});
}

export default Component;
