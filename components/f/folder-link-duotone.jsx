import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zatq3pxwu.css';
import '../../css/z/zq1yvvbci.css';
import '../../css/s/swsab_86e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zatq3pxwu"/><path clip-rule="evenodd" class="zq1yvvbci"/><circle class="swsab_86e"/></g>`,
		"fallback": "reicon:folder-link-duotone",
	});
}

export default Component;
