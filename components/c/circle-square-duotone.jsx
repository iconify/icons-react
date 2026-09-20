import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pys0i3bjn.css';
import '../../css/r/r8di_ca7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pys0i3bjn"/><path class="r8di_ca7a"/></g>`,
		"fallback": "keyline-icons:circle-square-duotone",
	});
}

export default Component;
