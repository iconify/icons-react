import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmg2hcb-r.css';
import '../../css/x/xcb251b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gmg2hcb-r"/><path clip-rule="evenodd" class="xcb251b5a"/></g>`,
		"fallback": "solar:eye-bold",
	});
}

export default Component;
