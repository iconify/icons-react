import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oul3lf3aq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oul3lf3aq"/>`,
		"fallback": "oi:clipboard",
	});
}

export default Component;
