import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g3a9cmb2v.css';
import '../../css/r/rvvccj5oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g3a9cmb2v"/><path class="rvvccj5oz"/></g>`,
		"fallback": "reicon:arrow-right-down-duotone",
	});
}

export default Component;
