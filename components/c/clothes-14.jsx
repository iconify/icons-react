import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbh0f59lw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbh0f59lw"/>`,
		"fallback": "osmic:clothes-14",
	});
}

export default Component;
