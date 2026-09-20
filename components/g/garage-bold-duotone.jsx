import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdfhryrly.css';
import '../../css/c/cnam_patx.css';
import '../../css/d/d0l29qbcp.css';
import '../../css/w/wz239zbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdfhryrly"/><path class="cnam_patx"/><path clip-rule="evenodd" class="d0l29qbcp"/><path class="wz239zbsv"/></g>`,
		"fallback": "solar:garage-bold-duotone",
	});
}

export default Component;
