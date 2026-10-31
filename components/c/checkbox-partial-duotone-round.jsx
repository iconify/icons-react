import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cecmm4gcr.css';
import '../../css/m/mtk96cbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cecmm4gcr"/><path class="mtk96cbio"/></g>`,
		"fallback": "coolicons:checkbox-partial-duotone-round",
	});
}

export default Component;
