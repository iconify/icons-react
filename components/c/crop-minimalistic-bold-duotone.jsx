import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynvhk2btp.css';
import '../../css/q/qn6zfg6br.css';
import '../../css/g/g0c5c7u0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ynvhk2btp"/><path class="qn6zfg6br"/><path class="g0c5c7u0y"/></g>`,
		"fallback": "solar:crop-minimalistic-bold-duotone",
	});
}

export default Component;
