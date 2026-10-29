import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfc8nsb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfc8nsb1i"/>`,
		"fallback": "withicons:infinity",
	});
}

export default Component;
