import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tuy7nqbjk.css';
import '../../css/j/j-br4xohm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tuy7nqbjk"/><path class="j-br4xohm"/></g>`,
		"fallback": "hugeicons:halal-lab",
	});
}

export default Component;
