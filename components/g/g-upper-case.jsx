import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgydwwb3g.css';

const viewBox = {"width":795,"height":776};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgydwwb3g"/>`,
		"fallback": "ls:g-upper-case",
	});
}

export default Component;
