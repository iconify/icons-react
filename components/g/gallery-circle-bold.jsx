import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nizghbc2j.css';
import '../../css/z/zoe8p2buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nizghbc2j"/><path clip-rule="evenodd" class="zoe8p2buf"/></g>`,
		"fallback": "solar:gallery-circle-bold",
	});
}

export default Component;
