import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ge_4tyilp.css';
import '../../css/h/h_8fozy6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ge_4tyilp"/><path class="h_8fozy6n"/></g>`,
		"fallback": "pixelarticons:cigarette-off",
	});
}

export default Component;
