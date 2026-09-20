import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0g-wtstw.css';
import '../../css/r/r2kj5fs6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k0g-wtstw"/><path class="r2kj5fs6h"/></g>`,
		"fallback": "solar:compass-big-bold-duotone",
	});
}

export default Component;
