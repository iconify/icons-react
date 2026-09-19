import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi8-49b4l.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi8-49b4l"/>`,
		"fallback": "vs:butterfly",
	});
}

export default Component;
