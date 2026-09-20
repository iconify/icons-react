import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vux4p6jeh.css';
import '../../css/i/ioyv5ckvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vux4p6jeh"/><path class="ioyv5ckvl"/></g>`,
		"fallback": "reicon:gift-filled",
	});
}

export default Component;
