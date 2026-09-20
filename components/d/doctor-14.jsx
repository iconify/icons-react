import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq_hkwbbx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq_hkwbbx"/>`,
		"fallback": "osmic:doctor-14",
	});
}

export default Component;
