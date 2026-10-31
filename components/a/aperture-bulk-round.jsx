import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txz1j7b0m.css';
import '../../css/k/ku-n9hbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txz1j7b0m"/><path class="ku-n9hbky"/></g>`,
		"fallback": "coolicons:aperture-bulk-round",
	});
}

export default Component;
