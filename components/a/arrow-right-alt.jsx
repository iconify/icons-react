import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dimg2-ovr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dimg2-ovr"/>`,
		"fallback": "dashicons:arrow-right-alt",
	});
}

export default Component;
