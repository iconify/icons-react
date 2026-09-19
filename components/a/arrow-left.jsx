import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylo1qp7ot.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylo1qp7ot"/>`,
		"fallback": "icomoon-free:arrow-left",
	});
}

export default Component;
