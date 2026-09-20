import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw6l7tbdq.css';
import '../../css/d/dzjiyss3b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw6l7tbdq"/><path class="dzjiyss3b"/>`,
		"fallback": "temaki:golf-cart",
	});
}

export default Component;
