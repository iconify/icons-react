import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrh60-b-m.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrh60-b-m"/>`,
		"fallback": "nrk:arrow-right-long-expressive",
	});
}

export default Component;
