import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb2a58jcg.css';
import '../../css/z/zis96rakg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eb2a58jcg"/><path class="zis96rakg"/></g>`,
		"fallback": "reicon:dollar2-duotone",
	});
}

export default Component;
