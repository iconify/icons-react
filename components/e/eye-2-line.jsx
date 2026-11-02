import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz6-anbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz6-anbhu"/>`,
		"fallback": "mingcute:eye-2-line",
	});
}

export default Component;
