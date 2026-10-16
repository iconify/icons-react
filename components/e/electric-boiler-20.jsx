import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlg1icbmr.css';
import '../../css/r/res8m0bwa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlg1icbmr"/><path class="res8m0bwa"/>`,
		"fallback": "energy-icons:electric-boiler-20",
	});
}

export default Component;
