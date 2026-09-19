import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke6-nwbts.css';
import '../../css/o/od4sw7bam.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke6-nwbts"/><path class="od4sw7bam"/>`,
		"fallback": "carbon:currency-shekel",
	});
}

export default Component;
