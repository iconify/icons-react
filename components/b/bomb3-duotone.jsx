import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ue0osgbad.css';
import '../../css/d/dix1bqnvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ue0osgbad"/><path class="dix1bqnvn"/></g>`,
		"fallback": "reicon:bomb3-duotone",
	});
}

export default Component;
