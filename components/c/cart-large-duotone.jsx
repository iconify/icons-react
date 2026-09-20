import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4rmvcc_s.css';
import '../../css/s/swm90vkhe.css';
import '../../css/i/isdk7pbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4rmvcc_s"/><path class="swm90vkhe"/><path class="isdk7pbrq"/></g>`,
		"fallback": "reicon:cart-large-duotone",
	});
}

export default Component;
