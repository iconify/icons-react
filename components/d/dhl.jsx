import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tau-3srte.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tau-3srte"/>`,
		"fallback": "fa7-brands:dhl",
	});
}

export default Component;
