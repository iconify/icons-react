import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/frcyxfb_h.css';
import '../../css/u/u1biqstsa.css';
import '../../css/g/grad3z_os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="frcyxfb_h"/><path class="u1biqstsa"/><path class="grad3z_os"/></g>`,
		"fallback": "solar:align-right-bold",
	});
}

export default Component;
