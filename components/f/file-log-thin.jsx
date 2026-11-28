import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rylf6pbyl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rylf6pbyl"/>`,
		"fallback": "pullo:file-log-thin",
	});
}

export default Component;
