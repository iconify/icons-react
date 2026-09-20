import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucnsm_buf.css';
import '../../css/u/u6ix9rv5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucnsm_buf"/><path clip-rule="evenodd" class="u6ix9rv5a"/></g>`,
		"fallback": "reicon:headphones-sound2-duotone",
	});
}

export default Component;
