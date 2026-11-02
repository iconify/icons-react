import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl-3lebda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl-3lebda"/>`,
		"fallback": "mingcute:external-link-line",
	});
}

export default Component;
