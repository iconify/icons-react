import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxdxpjbeg.css';
import '../../css/m/ml3c-rbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kxdxpjbeg"/><path class="ml3c-rbht"/></g>`,
		"fallback": "reicon:eye-closed-duotone",
	});
}

export default Component;
