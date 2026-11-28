import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve2w2-b5w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve2w2-b5w"/>`,
		"fallback": "pullo:chart-area",
	});
}

export default Component;
