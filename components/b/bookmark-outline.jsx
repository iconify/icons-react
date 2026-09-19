import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erpo1w27n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erpo1w27n"/>`,
		"fallback": "gridicons:bookmark-outline",
	});
}

export default Component;
