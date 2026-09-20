import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyzxs_mrx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyzxs_mrx"/>`,
		"fallback": "simple-line-icons:exclamation",
	});
}

export default Component;
