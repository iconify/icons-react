import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lun0yebjf.css';
import '../../css/r/reubxpb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lun0yebjf"/><path clip-rule="evenodd" class="reubxpb7i"/></g>`,
		"fallback": "reicon:cup-trophy",
	});
}

export default Component;
