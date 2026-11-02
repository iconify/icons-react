import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuoh5bbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuoh5bbbk"/>`,
		"fallback": "mingcute:anniversary-line",
	});
}

export default Component;
