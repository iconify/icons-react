import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jo5fttb-r.css';
import '../../css/a/amotr2b_o.css';
import '../../css/v/vaxyosbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jo5fttb-r"/><path clip-rule="evenodd" class="amotr2b_o"/><path class="vaxyosbrx"/></g>`,
		"fallback": "healthicons:heat-therapy-outline-24px",
	});
}

export default Component;
