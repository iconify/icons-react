import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgp5bp7mg.css';
import '../../css/x/x4mv-7s-h.css';
import '../../css/y/ywrsrb7ne.css';
import '../../css/l/lsen5obiz.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dgp5bp7mg"/><path clip-rule="evenodd" class="x4mv-7s-h"/><path class="ywrsrb7ne"/><path clip-rule="evenodd" class="lsen5obiz"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:handshake-circle-off",
	});
}

export default Component;
