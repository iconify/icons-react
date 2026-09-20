import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff4lnybeu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ff4lnybeu"/>`,
		"fallback": "streamline-block:basic-ui-time",
	});
}

export default Component;
