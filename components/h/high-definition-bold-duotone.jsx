import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/b/btnl23bob.css';
import '../../css/d/dl28y1bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="btnl23bob"/><path clip-rule="evenodd" class="dl28y1bbw"/></g>`,
		"fallback": "solar:high-definition-bold-duotone",
	});
}

export default Component;
