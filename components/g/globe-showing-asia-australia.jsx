import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bac5zybvw.css';
import '../../css/y/yosgocbab.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bac5zybvw"/><path clip-rule="evenodd" class="yosgocbab"/></g>`,
		"fallback": "fluent-emoji-high-contrast:globe-showing-asia-australia",
	});
}

export default Component;
