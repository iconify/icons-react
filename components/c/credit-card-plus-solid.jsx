import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jf47y0bux.css';
import '../../css/s/sjv0-obmg.css';
import '../../css/g/g66d78b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jf47y0bux"/><path class="sjv0-obmg"/><path clip-rule="evenodd" class="g66d78b4x"/></g>`,
		"fallback": "flowbite:credit-card-plus-solid",
	});
}

export default Component;
