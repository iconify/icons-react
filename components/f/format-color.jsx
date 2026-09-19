import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xw0wd8fmb.css';
import '../../css/v/vc30k6bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xw0wd8fmb"/><path class="vc30k6bgt"/></g>`,
		"fallback": "gg:format-color",
	});
}

export default Component;
