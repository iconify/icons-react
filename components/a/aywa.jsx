import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbbxf8-7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbbxf8-7e"/>`,
		"fallback": "cryptocurrency:aywa",
	});
}

export default Component;
