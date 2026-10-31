import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxlmj7a9i.css';
import '../../css/d/d64vzlb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxlmj7a9i"/><path class="d64vzlb2y"/></g>`,
		"fallback": "coolicons:gallery-duotone-round",
	});
}

export default Component;
