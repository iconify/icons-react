import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2kh23b7q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2kh23b7q"/>`,
		"fallback": "foundation:filter",
	});
}

export default Component;
