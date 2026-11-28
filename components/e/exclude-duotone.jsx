import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kcq93vmvd.css';
import '../../css/t/tbhsaebua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kcq93vmvd secondary"/><path class="primary tbhsaebua"/></g>`,
		"fallback": "iconaut:exclude-duotone",
	});
}

export default Component;
