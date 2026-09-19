import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5oyh1b4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5oyh1b4k"/>`,
		"fallback": "charm:clover",
	});
}

export default Component;
