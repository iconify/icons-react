import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fimc63bgn.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fimc63bgn"/>`,
		"fallback": "whh:fatarrowright",
	});
}

export default Component;
