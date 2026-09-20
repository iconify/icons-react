import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3cf44y8j.css';
import '../../css/y/y6nl_rblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x3cf44y8j"/><path clip-rule="evenodd" class="y6nl_rblj"/></g>`,
		"fallback": "reicon:closet-filled",
	});
}

export default Component;
