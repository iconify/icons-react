import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bepp79b9p.css';
import '../../css/g/gflj47boh.css';
import '../../css/g/gtrbizr6q.css';
import '../../css/d/du1x3tbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bepp79b9p"/><path class="gflj47boh"/><circle class="gtrbizr6q"/><path class="du1x3tbgo"/></g>`,
		"fallback": "andrsrxn:flow-minus",
	});
}

export default Component;
