import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-06c7hcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-06c7hcl"/>`,
		"fallback": "mingcute:circle-chevron-right-fill",
	});
}

export default Component;
