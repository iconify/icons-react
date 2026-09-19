import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msmt2ql3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msmt2ql3o"/>`,
		"fallback": "bi:chevron-compact-right",
	});
}

export default Component;
