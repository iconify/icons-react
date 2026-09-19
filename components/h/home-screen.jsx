import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3-rmtbdf.css';
import '../../css/y/y4awlz4km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b3-rmtbdf"/><path clip-rule="evenodd" class="y4awlz4km"/></g>`,
		"fallback": "gg:home-screen",
	});
}

export default Component;
