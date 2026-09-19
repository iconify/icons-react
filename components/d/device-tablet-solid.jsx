import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbgq63fyo.css';
import '../../css/h/hljn4-cim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vbgq63fyo"/><path clip-rule="evenodd" class="hljn4-cim"/></g>`,
		"fallback": "heroicons:device-tablet-solid",
	});
}

export default Component;
