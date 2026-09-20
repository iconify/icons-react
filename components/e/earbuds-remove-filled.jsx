import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ynzx39v3i.css';
import '../../css/x/xq9g9ub1r.css';
import '../../css/t/tm75_5b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ynzx39v3i"/><path class="xq9g9ub1r"/><path clip-rule="evenodd" class="tm75_5b1u"/></g>`,
		"fallback": "reicon:earbuds-remove-filled",
	});
}

export default Component;
