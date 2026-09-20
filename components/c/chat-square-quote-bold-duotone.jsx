import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/j/jjizm5beh.css';
import '../../css/r/r4qjc2buy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path clip-rule="evenodd" class="jjizm5beh"/><path clip-rule="evenodd" class="r4qjc2buy"/></g>`,
		"fallback": "solar:chat-square-quote-bold-duotone",
	});
}

export default Component;
