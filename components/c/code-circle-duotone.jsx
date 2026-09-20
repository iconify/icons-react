import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpsf3pb4n.css';
import '../../css/g/gg7yvtvgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpsf3pb4n"/><path class="gg7yvtvgi"/></g>`,
		"fallback": "reicon:code-circle-duotone",
	});
}

export default Component;
