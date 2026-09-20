import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/baip8bc5j.css';
import '../../css/w/waifigj3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="baip8bc5j"/><path class="waifigj3a"/></g>`,
		"fallback": "solar:circle-bottom-up-bold",
	});
}

export default Component;
