import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bp5nzhzwt.css';
import '../../css/n/nqqknubei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bp5nzhzwt"/><path clip-rule="evenodd" class="nqqknubei"/></g>`,
		"fallback": "reicon:cloud-down",
	});
}

export default Component;
