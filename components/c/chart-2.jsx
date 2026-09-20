import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz2kky7ul.css';
import '../../css/v/vi8f91b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wz2kky7ul"/><path class="vi8f91b0a"/></g>`,
		"fallback": "reicon:chart-2",
	});
}

export default Component;
