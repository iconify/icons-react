import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_1s8bpf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_1s8bpf"/>`,
		"fallback": "garden:bold-fill-16",
	});
}

export default Component;
