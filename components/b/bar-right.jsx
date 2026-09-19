import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt8tbghbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt8tbghbd"/>`,
		"fallback": "ci:bar-right",
	});
}

export default Component;
