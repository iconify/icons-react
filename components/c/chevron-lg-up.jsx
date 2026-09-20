import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_7bugblf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_7bugblf"/>`,
		"fallback": "pajamas:chevron-lg-up",
	});
}

export default Component;
