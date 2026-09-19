import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf53qf9hu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf53qf9hu"/>`,
		"fallback": "fa6-brands:app-store-ios",
	});
}

export default Component;
