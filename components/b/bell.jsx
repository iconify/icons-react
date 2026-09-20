import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_l4jyzdi.css';
import '../../css/m/ml556acti.css';
import '../../css/v/vlfkidbeh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_l4jyzdi"/><path clip-rule="evenodd" class="ml556acti"/><path class="vlfkidbeh"/></g>`,
		"fallback": "pepicons-pencil:bell",
	});
}

export default Component;
