import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k15v96bmm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k15v96bmm"/>`,
		"fallback": "radix-icons:chevron-right",
	});
}

export default Component;
