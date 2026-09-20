import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ksizx2blw.css';
import '../../css/c/c8zf9kbgu.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pztiu2bub.css';
import '../../css/j/j28658mae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ksizx2blw"/><path class="c8zf9kbgu"/><g class="mc2zb0bvp"><path class="pztiu2bub"/><path class="j28658mae"/></g></g>`,
		"fallback": "solar:hashtag-bold-duotone",
	});
}

export default Component;
