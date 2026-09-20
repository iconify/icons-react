import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spsi6z36x.css';
import '../../css/o/o6fqsiv4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spsi6z36x"/><path class="o6fqsiv4l"/></g>`,
		"fallback": "solar:cloud-waterdrop-bold-duotone",
	});
}

export default Component;
