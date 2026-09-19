import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad2u7zbmi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad2u7zbmi"/>`,
		"fallback": "at-icons:circle",
	});
}

export default Component;
