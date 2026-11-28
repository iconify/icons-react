import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p1sodobsj.css';
import '../../css/c/cb2ebv_fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p1sodobsj secondary"/><path class="cb2ebv_fr primary"/></g>`,
		"fallback": "iconaut:function-duotone",
	});
}

export default Component;
