import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xl5kx0blz.css';
import '../../css/m/my-wcvbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xl5kx0blz"/><path class="my-wcvbri"/></g>`,
		"fallback": "reicon:fullscreen-duotone",
	});
}

export default Component;
