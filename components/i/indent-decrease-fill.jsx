import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzgds-ntu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzgds-ntu"/>`,
		"fallback": "mingcute:indent-decrease-fill",
	});
}

export default Component;
