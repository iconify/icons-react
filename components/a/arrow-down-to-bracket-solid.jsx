import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/g2tgghbmg.css';
import '../../css/c/ck4uh6bni.css';
import '../../css/n/n308__4yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="g2tgghbmg"/><path class="ck4uh6bni"/><path class="n308__4yo"/></g>`,
		"fallback": "flowbite:arrow-down-to-bracket-solid",
	});
}

export default Component;
