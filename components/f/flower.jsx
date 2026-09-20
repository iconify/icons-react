import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6s4wib7b.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6s4wib7b"/>`,
		"fallback": "lineicons:flower",
	});
}

export default Component;
