import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw3pupb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rw3pupb2i"/>`,
		"fallback": "mingcute:coin-fill",
	});
}

export default Component;
