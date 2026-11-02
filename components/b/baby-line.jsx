import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv2vadc9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv2vadc9i"/>`,
		"fallback": "mingcute:baby-line",
	});
}

export default Component;
