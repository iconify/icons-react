import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw7q8-jnd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw7q8-jnd"/>`,
		"fallback": "carbon:graph-aggregator",
	});
}

export default Component;
