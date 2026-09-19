import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xme-khm4k.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xme-khm4k"/>`,
		"fallback": "fa:bullhorn",
	});
}

export default Component;
