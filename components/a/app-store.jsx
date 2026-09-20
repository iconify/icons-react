import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqxu_2f7e.css';
import '../../css/p/p5m73hbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eqxu_2f7e"/><path class="p5m73hbmq"/></g>`,
		"fallback": "proicons:app-store",
	});
}

export default Component;
