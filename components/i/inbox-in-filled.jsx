import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/palcawbql.css';
import '../../css/g/gsx79b0zp.css';
import '../../css/e/e6h2u9bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="palcawbql"/><path class="gsx79b0zp"/><path class="e6h2u9bam"/></g>`,
		"fallback": "reicon:inbox-in-filled",
	});
}

export default Component;
