import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow40lcb2l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow40lcb2l"/>`,
		"fallback": "cib:dtube",
	});
}

export default Component;
