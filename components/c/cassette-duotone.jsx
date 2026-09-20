import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pr02lwb3m.css';
import '../../css/z/zac9v1r7n.css';
import '../../css/g/g_e5y91es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pr02lwb3m"/><path class="zac9v1r7n"/><path clip-rule="evenodd" class="g_e5y91es"/></g>`,
		"fallback": "reicon:cassette-duotone",
	});
}

export default Component;
