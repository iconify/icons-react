import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hspmtbc_a.css';
import '../../css/p/pmrah-9cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hspmtbc_a"/><path class="pmrah-9cf"/></g>`,
		"fallback": "solar:diagram-down-outline",
	});
}

export default Component;
