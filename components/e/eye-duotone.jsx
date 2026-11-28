import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqjw6xbxp.css';
import '../../css/v/vc7md9bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqjw6xbxp secondary"/><path class="primary vc7md9bhx"/></g>`,
		"fallback": "iconaut:eye-duotone",
	});
}

export default Component;
