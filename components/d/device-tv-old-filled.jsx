import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xuvr5tbwc.css';
import '../../css/z/zre65-bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xuvr5tbwc"/><path class="zre65-bad"/></g>`,
		"fallback": "tabler:device-tv-old-filled",
	});
}

export default Component;
