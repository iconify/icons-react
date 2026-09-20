import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuaa2cbji.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuaa2cbji"/>`,
		"fallback": "osmic:hospital-14",
	});
}

export default Component;
