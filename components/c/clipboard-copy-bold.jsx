import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hfi6yhu1m.css';
import '../../css/c/c3lyyzb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hfi6yhu1m"/><path class="c3lyyzb8p"/></g>`,
		"fallback": "solar:clipboard-copy-bold",
	});
}

export default Component;
