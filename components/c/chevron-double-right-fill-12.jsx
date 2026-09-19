import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnzxjem_o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnzxjem_o"/>`,
		"fallback": "garden:chevron-double-right-fill-12",
	});
}

export default Component;
