import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g-_iffbhm.css';
import '../../css/h/hezeheb9o.css';
import '../../css/n/ngc_fgbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g-_iffbhm"/><path clip-rule="evenodd" class="hezeheb9o"/><path class="ngc_fgbhq"/></g>`,
		"fallback": "healthicons:ambulance-24px",
	});
}

export default Component;
