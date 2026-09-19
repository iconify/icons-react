import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqwcmcb4n.css';
import '../../css/q/qux5xfowb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zqwcmcb4n"/><path clip-rule="evenodd" class="qux5xfowb"/></g>`,
		"fallback": "heroicons:camera-solid",
	});
}

export default Component;
