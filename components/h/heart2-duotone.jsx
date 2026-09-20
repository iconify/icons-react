import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2v94rbnt.css';
import '../../css/h/hl98jbu5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z2v94rbnt"/><path class="hl98jbu5h"/></g>`,
		"fallback": "reicon:heart2-duotone",
	});
}

export default Component;
