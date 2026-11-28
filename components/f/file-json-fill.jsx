import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkxlcrb4s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkxlcrb4s"/>`,
		"fallback": "pullo:file-json-fill",
	});
}

export default Component;
