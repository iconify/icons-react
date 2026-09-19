import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chj9ap-la.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chj9ap-la"/>`,
		"fallback": "bi:globe",
	});
}

export default Component;
