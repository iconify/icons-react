import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mkgsbpz0f.css';
import '../../css/j/j0ihrzw-z.css';
import '../../css/d/dz23bcb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mkgsbpz0f"/><path class="j0ihrzw-z"/><path class="dz23bcb2s"/></g>`,
		"fallback": "hugeicons:campfire",
	});
}

export default Component;
