import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqg3iacjl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqg3iacjl"/>`,
		"fallback": "memory:battery-25",
	});
}

export default Component;
