import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4fq_wbjr.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4fq_wbjr"/>`,
		"fallback": "whh:design",
	});
}

export default Component;
