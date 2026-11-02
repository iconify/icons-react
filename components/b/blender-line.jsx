import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx8qa3b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx8qa3b9h"/>`,
		"fallback": "mingcute:blender-line",
	});
}

export default Component;
