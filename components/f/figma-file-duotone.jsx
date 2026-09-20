import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pjj4tybjd.css';
import '../../css/q/q76xs3pzf.css';
import '../../css/u/uowju7b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pjj4tybjd"/><path clip-rule="evenodd" class="q76xs3pzf"/><path class="uowju7b0j"/></g>`,
		"fallback": "reicon:figma-file-duotone",
	});
}

export default Component;
