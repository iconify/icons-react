import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wijn4obnn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wijn4obnn"/>`,
		"fallback": "fa-brands:bootstrap",
	});
}

export default Component;
