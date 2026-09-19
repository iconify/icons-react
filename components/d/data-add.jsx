import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbjht8bwl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbjht8bwl"/>`,
		"fallback": "carbon:data-add",
	});
}

export default Component;
