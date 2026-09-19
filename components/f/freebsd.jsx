import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkonw9bfo.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkonw9bfo"/>`,
		"fallback": "fa-brands:freebsd",
	});
}

export default Component;
