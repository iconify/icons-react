import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gasfqu__j.css';
import '../../css/m/m3o5pwslp.css';
import '../../css/d/d-vo-mbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gasfqu__j"/><path clip-rule="evenodd" class="m3o5pwslp"/><path class="d-vo-mbjn"/></g>`,
		"fallback": "nrk:image-stack",
	});
}

export default Component;
