import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuffd7q-s.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuffd7q-s"/>`,
		"fallback": "jam:chevron-square-down-right",
	});
}

export default Component;
