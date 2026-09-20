import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/woioudzji.css';
import '../../css/g/g13ssybrq.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="woioudzji"/><path class="g13ssybrq"/><path class="s8qju0q_z"/></g>`,
		"fallback": "solar:figma-file-bold-duotone",
	});
}

export default Component;
