import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc-1-6brj.css';

const viewBox = {"width":814,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc-1-6brj"/>`,
		"fallback": "thesvg-color:apple-light",
	});
}

export default Component;
