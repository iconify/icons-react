import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcdb8rbbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcdb8rbbz"/>`,
		"fallback": "selfhst:hugo-light",
	});
}

export default Component;
