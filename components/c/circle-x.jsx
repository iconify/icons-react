import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa34macfr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa34macfr"/>`,
		"fallback": "oi:circle-x",
	});
}

export default Component;
