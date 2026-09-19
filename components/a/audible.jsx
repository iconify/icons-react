import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq7aiob3f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq7aiob3f"/>`,
		"fallback": "fa7-brands:audible",
	});
}

export default Component;
