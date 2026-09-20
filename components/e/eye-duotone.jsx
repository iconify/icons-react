import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqxrr1bzy.css';
import '../../css/s/spunesb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqxrr1bzy"/><path clip-rule="evenodd" class="spunesb7q"/></g>`,
		"fallback": "reicon:eye-duotone",
	});
}

export default Component;
