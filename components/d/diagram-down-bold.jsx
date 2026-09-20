import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hspmtbc_a.css';
import '../../css/a/a3taasj6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hspmtbc_a"/><path class="a3taasj6o"/></g>`,
		"fallback": "solar:diagram-down-bold",
	});
}

export default Component;
