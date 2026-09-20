import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs6yp6sra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs6yp6sra"/>`,
		"fallback": "mingcute:heavy-snow-line",
	});
}

export default Component;
