import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nus-hpw-q.css';
import '../../css/q/qad5-3v1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nus-hpw-q"/><path clip-rule="evenodd" class="qad5-3v1p"/></g>`,
		"fallback": "reicon:hard-drive-filled",
	});
}

export default Component;
