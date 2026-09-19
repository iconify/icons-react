import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g42dr9bct.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g42dr9bct"/>`,
		"fallback": "fad:cpu",
	});
}

export default Component;
