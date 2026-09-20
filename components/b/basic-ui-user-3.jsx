import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it10i7brj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it10i7brj"/>`,
		"fallback": "streamline-block:basic-ui-user-3",
	});
}

export default Component;
