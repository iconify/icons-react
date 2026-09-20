import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2fa5jl0m.css';
import '../../css/c/c1we6mlhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2fa5jl0m"/><path class="c1we6mlhd"/></g>`,
		"fallback": "reicon:inbox-duotone",
	});
}

export default Component;
