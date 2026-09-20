import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xos-ubyxz.css';
import '../../css/t/t28iyjb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xos-ubyxz"/><path clip-rule="evenodd" class="t28iyjb0s"/></g>`,
		"fallback": "reicon:gallery-circle-filled",
	});
}

export default Component;
