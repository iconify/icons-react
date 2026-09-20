import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oah2h5byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oah2h5byt"/>`,
		"fallback": "mingcute:background-base-line",
	});
}

export default Component;
