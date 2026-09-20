import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-al7jbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-al7jbls"/>`,
		"fallback": "simple-icons:codechef",
	});
}

export default Component;
