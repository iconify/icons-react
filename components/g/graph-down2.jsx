import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4gh0oh5n.css';
import '../../css/f/fmw3-pv1t.css';
import '../../css/s/s-_ewh-er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4gh0oh5n"/><path class="fmw3-pv1t"/><path clip-rule="evenodd" class="s-_ewh-er"/></g>`,
		"fallback": "reicon:graph-down2",
	});
}

export default Component;
