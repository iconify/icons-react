import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg14rmb_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg14rmb_o"/>`,
		"fallback": "famicons:analytics",
	});
}

export default Component;
