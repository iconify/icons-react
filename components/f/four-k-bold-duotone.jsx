import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/x/x7-jysbbo.css';
import '../../css/g/ghcq8sbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="x7-jysbbo"/><path class="ghcq8sbsx"/></g>`,
		"fallback": "solar:four-k-bold-duotone",
	});
}

export default Component;
