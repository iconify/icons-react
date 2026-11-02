import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw5xzmb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw5xzmb-h"/>`,
		"fallback": "mingcute:arrows-right-fill",
	});
}

export default Component;
