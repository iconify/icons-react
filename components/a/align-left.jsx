import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krpsxf9bo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krpsxf9bo"/>`,
		"fallback": "foundation:align-left",
	});
}

export default Component;
