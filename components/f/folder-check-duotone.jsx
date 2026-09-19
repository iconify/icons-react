import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdaas3bt.css';
import '../../css/c/cff9as3hm.css';
import '../../css/y/y35g5r12s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjdaas3bt"/><path class="cff9as3hm"/><path class="y35g5r12s"/></g>`,
		"fallback": "iconamoon:folder-check-duotone",
	});
}

export default Component;
