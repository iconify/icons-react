import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpl65cc6p.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpl65cc6p"/>`,
		"fallback": "lineicons:delivery",
	});
}

export default Component;
