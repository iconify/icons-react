import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-ktgmbii.css';
import '../../css/o/o7rv_ccyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b-ktgmbii"/><path class="o7rv_ccyf"/></g>`,
		"fallback": "solar:arrow-right-down-bold-duotone",
	});
}

export default Component;
