import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2l72ybha.css';
import '../../css/s/sjk59644y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2l72ybha"/><path class="sjk59644y"/></g>`,
		"fallback": "tabler:edit-filled",
	});
}

export default Component;
