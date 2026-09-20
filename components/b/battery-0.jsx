import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngyvv5bhk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngyvv5bhk"/>`,
		"fallback": "memory:battery-0",
	});
}

export default Component;
