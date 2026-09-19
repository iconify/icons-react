import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3uhq0alc.css';

const viewBox = {"width":605,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3uhq0alc"/>`,
		"fallback": "ls:bookmark",
	});
}

export default Component;
