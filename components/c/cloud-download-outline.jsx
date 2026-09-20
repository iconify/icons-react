import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbdmo9xrt.css';
import '../../css/f/ffrid5b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbdmo9xrt"/><path class="ffrid5b2g"/></g>`,
		"fallback": "solar:cloud-download-outline",
	});
}

export default Component;
