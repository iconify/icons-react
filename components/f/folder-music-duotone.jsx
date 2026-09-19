import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdaas3bt.css';
import '../../css/c/cff9as3hm.css';
import '../../css/y/y10-r2bvg.css';
import '../../css/n/nq-2sy44y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjdaas3bt"/><path class="cff9as3hm"/><circle class="y10-r2bvg"/><path class="nq-2sy44y"/></g>`,
		"fallback": "iconamoon:folder-music-duotone",
	});
}

export default Component;
