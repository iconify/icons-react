import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtvh7v3ee.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtvh7v3ee"/>`,
		"fallback": "raphael:expand",
	});
}

export default Component;
