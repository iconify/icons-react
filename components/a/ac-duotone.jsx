import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqbcb6i-q.css';
import '../../css/b/b8605kmfe.css';
import '../../css/z/zom_7r8uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aqbcb6i-q"/><path class="b8605kmfe"/><path clip-rule="evenodd" class="zom_7r8uh"/></g>`,
		"fallback": "reicon:ac-duotone",
	});
}

export default Component;
