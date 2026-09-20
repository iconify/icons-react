import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9sh5i22h.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9sh5i22h"/>`,
		"fallback": "jam:activity",
	});
}

export default Component;
