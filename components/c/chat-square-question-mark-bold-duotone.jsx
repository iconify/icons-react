import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/r/r3zcb7bmk.css';
import '../../css/r/revd7f9ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="r3zcb7bmk"/><path class="revd7f9ko"/></g>`,
		"fallback": "solar:chat-square-question-mark-bold-duotone",
	});
}

export default Component;
