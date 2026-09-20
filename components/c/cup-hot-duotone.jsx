import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ukszeygmg.css';
import '../../css/f/fi8b70b0k.css';
import '../../css/z/z1gu1ybvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ukszeygmg"/><path class="fi8b70b0k"/><path clip-rule="evenodd" class="z1gu1ybvc"/></g>`,
		"fallback": "reicon:cup-hot-duotone",
	});
}

export default Component;
