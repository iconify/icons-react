import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7dqf_b7i.css';

const viewBox = {"width":256,"height":204};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7dqf_b7i"/>`,
		"fallback": "thesvg-color:bootstrap",
	});
}

export default Component;
