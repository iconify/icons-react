import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpcv03ats.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpcv03ats"/>`,
		"fallback": "zmdi:flip-to-front",
	});
}

export default Component;
