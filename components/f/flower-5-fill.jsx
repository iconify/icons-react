import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx8_68b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx8_68b7o"/>`,
		"fallback": "mingcute:flower-5-fill",
	});
}

export default Component;
