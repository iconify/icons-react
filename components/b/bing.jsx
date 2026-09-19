import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpun400or.css';

const viewBox = {"width":680,"height":633};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpun400or"/>`,
		"fallback": "ls:bing",
	});
}

export default Component;
