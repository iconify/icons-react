import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emzanzd5i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emzanzd5i"/>`,
		"fallback": "picon:fort",
	});
}

export default Component;
