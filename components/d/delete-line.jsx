import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt2cw3b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt2cw3b-j"/>`,
		"fallback": "mingcute:delete-line",
	});
}

export default Component;
