import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qj03rcbch.css';
import '../../css/q/q504gelvl.css';
import '../../css/p/p9xc8ybqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qj03rcbch"/><path clip-rule="evenodd" class="q504gelvl"/><path class="p9xc8ybqi"/></g>`,
		"fallback": "reicon:history2-duotone",
	});
}

export default Component;
