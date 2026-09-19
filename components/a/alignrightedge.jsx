import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_gz1s1cv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_gz1s1cv"/>`,
		"fallback": "whh:alignrightedge",
	});
}

export default Component;
