import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa5486b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa5486b-e"/>`,
		"fallback": "hugeicons:align-start-vertical",
	});
}

export default Component;
