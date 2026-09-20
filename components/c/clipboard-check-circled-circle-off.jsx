import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey2r02nhy.css';
import '../../css/k/kunsb_bgc.css';
import '../../css/t/tx27g4bbc.css';
import '../../css/g/g9geo6v2w.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ey2r02nhy"/><path clip-rule="evenodd" class="kunsb_bgc"/><path clip-rule="evenodd" class="tx27g4bbc"/><path clip-rule="evenodd" class="g9geo6v2w"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:clipboard-check-circled-circle-off",
	});
}

export default Component;
