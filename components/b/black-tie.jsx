import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yijhkhrdk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yijhkhrdk"/>`,
		"fallback": "fa-brands:black-tie",
	});
}

export default Component;
