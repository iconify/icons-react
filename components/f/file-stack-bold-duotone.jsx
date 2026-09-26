import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x0c9_4bxl.css';
import '../../css/n/nh1xv36ao.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f09_mkvvu.css';
import '../../css/k/kv93igb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x0c9_4bxl"/><path class="nh1xv36ao"/><g class="mc2zb0bvp"><path class="f09_mkvvu"/><path class="kv93igb5n"/></g></g>`,
		"fallback": "solar:file-stack-bold-duotone",
	});
}

export default Component;
