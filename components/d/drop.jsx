import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyent6gbf.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyent6gbf"/>`,
		"fallback": "lineicons:drop",
	});
}

export default Component;
