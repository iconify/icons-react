import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rsxzwk-kh.css';
import '../../css/o/om4gze-bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rsxzwk-kh"/><path clip-rule="evenodd" class="om4gze-bn"/></g>`,
		"fallback": "healthicons:clinical-f-outline-24px",
	});
}

export default Component;
