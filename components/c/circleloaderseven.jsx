import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmg8jk-cf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmg8jk-cf"/>`,
		"fallback": "whh:circleloaderseven",
	});
}

export default Component;
