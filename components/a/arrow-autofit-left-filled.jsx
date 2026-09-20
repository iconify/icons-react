import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfw4eis5o.css';
import '../../css/l/luwbe3bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfw4eis5o"/><path class="luwbe3bzj"/></g>`,
		"fallback": "tabler:arrow-autofit-left-filled",
	});
}

export default Component;
