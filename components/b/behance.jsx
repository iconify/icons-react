import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hv5ri9aus.css';
import '../../css/y/y_5k0zbsx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hv5ri9aus"/><path class="y_5k0zbsx"/></g>`,
		"fallback": "devicon-plain:behance",
	});
}

export default Component;
