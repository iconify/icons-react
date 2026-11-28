import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7ddaji-p.css';
import '../../css/k/k94o83zcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q7ddaji-p secondary"/><path class="k94o83zcf primary"/></g>`,
		"fallback": "iconaut:cooking-pot-duotone",
	});
}

export default Component;
