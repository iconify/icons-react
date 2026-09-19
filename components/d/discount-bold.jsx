import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/obx052bri.css';
import '../../css/b/b399byz-b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="obx052bri"/><path clip-rule="evenodd" class="b399byz-b"/></g>`,
		"fallback": "glyphs:discount-bold",
	});
}

export default Component;
