import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxmnibt_f.css';
import '../../css/i/iix821-pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxmnibt_f secondary"/><path class="iix821-pp primary"/></g>`,
		"fallback": "iconaut:grill-duotone",
	});
}

export default Component;
