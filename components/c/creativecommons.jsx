import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2pfyrqig.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2pfyrqig"/>`,
		"fallback": "whh:creativecommons",
	});
}

export default Component;
