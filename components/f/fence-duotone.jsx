import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esq_qvb7l.css';
import '../../css/q/q6knp_bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esq_qvb7l secondary"/><path class="primary q6knp_bap"/></g>`,
		"fallback": "iconaut:fence-duotone",
	});
}

export default Component;
