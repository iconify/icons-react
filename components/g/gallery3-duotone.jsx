import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/idc33h8qs.css';
import '../../css/u/u7500zbjf.css';
import '../../css/i/i7tbtit9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="idc33h8qs"/><path class="u7500zbjf"/><path class="i7tbtit9u"/></g>`,
		"fallback": "reicon:gallery3-duotone",
	});
}

export default Component;
