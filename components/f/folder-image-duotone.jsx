import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjdaas3bt.css';
import '../../css/c/cff9as3hm.css';
import '../../css/e/e1o7ypx2r.css';
import '../../css/f/foumiebwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zjdaas3bt"/><path class="cff9as3hm"/><path class="e1o7ypx2r"/><path class="foumiebwk"/></g>`,
		"fallback": "iconamoon:folder-image-duotone",
	});
}

export default Component;
