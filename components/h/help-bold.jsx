import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yprzxp2bn.css';
import '../../css/f/fcdl09bqv.css';
import '../../css/q/qmgu1zbuk.css';
import '../../css/c/cjczfw5cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yprzxp2bn"/><path class="fcdl09bqv"/><path class="qmgu1zbuk"/><path class="cjczfw5cf"/></g>`,
		"fallback": "solar:help-bold",
	});
}

export default Component;
