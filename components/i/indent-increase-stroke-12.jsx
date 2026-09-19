import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot5cy7qnr.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot5cy7qnr"/>`,
		"fallback": "garden:indent-increase-stroke-12",
	});
}

export default Component;
