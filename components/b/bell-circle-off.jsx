import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz6n8fgjv.css';
import '../../css/t/t-g9ozbrz.css';
import '../../css/w/wu88aw84f.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uz6n8fgjv"/><path clip-rule="evenodd" class="t-g9ozbrz"/><path class="wu88aw84f"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:bell-circle-off",
	});
}

export default Component;
