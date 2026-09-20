import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij5db5ezo.css';
import '../../css/u/un4i8zbgk.css';
import '../../css/p/pgyhgdc3l.css';
import '../../css/v/vi8f91b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ij5db5ezo"/><path class="un4i8zbgk"/><path class="pgyhgdc3l"/><path class="vi8f91b0a"/></g>`,
		"fallback": "reicon:chart2-duotone",
	});
}

export default Component;
