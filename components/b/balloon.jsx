import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sp9uf5bmo.css';
import '../../css/h/hfnc1l3ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sp9uf5bmo"/><path clip-rule="evenodd" class="hfnc1l3ij"/></g>`,
		"fallback": "reicon:balloon",
	});
}

export default Component;
