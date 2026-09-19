import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdk9lobzi.css';
import '../../css/s/se7chyoef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sdk9lobzi"/><path class="se7chyoef"/></g>`,
		"fallback": "healthicons:biopsy-24px",
	});
}

export default Component;
