import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kczvw2bym.css';
import '../../css/n/nv3-9gbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kczvw2bym"/><path class="nv3-9gbrz"/></g>`,
		"fallback": "reicon:chair2-duotone",
	});
}

export default Component;
