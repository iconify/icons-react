import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2pi-7bkl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2pi-7bkl"/>`,
		"fallback": "cib:app-store-ios",
	});
}

export default Component;
