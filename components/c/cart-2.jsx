import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4cc3ab5d.css';
import '../../css/y/ysifiqi0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4cc3ab5d"/><path class="ysifiqi0c"/>`,
		"fallback": "lineicons:cart-2",
	});
}

export default Component;
