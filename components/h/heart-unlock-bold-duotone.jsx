import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zs6l8u0uh.css';
import '../../css/g/gdoe5tb6n.css';
import '../../css/k/k0nbc90lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zs6l8u0uh"/><path class="gdoe5tb6n"/><path clip-rule="evenodd" class="k0nbc90lp"/></g>`,
		"fallback": "solar:heart-unlock-bold-duotone",
	});
}

export default Component;
