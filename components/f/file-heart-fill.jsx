import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihhymhb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihhymhb-i"/>`,
		"fallback": "mingcute:file-heart-fill",
	});
}

export default Component;
