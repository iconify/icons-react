import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/y/y4qrjhbra.css';
import '../../css/t/tlapj1b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="y4qrjhbra"/><path clip-rule="evenodd" class="tlapj1b3d"/></g>`,
		"fallback": "solar:high-quality-bold-duotone",
	});
}

export default Component;
