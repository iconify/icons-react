import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzdf8pb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzdf8pb8j"/>`,
		"fallback": "mingcute:directions-2-line",
	});
}

export default Component;
