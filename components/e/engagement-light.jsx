import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0awb8bkd.css';
import '../../css/e/ejcigpbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0awb8bkd"/><path class="ejcigpbak"/>`,
		"fallback": "stash:engagement-light",
	});
}

export default Component;
