import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn6uicxet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn6uicxet"/>`,
		"fallback": "streamline-plump:customer-support-3-solid",
	});
}

export default Component;
