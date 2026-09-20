import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ze4w_bkar.css';
import '../../css/i/i37c93bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ze4w_bkar"/><path clip-rule="evenodd" class="i37c93bqd"/></g>`,
		"fallback": "reicon:battery-full",
	});
}

export default Component;
