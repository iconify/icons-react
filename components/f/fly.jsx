import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfsrg4brj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfsrg4brj"/>`,
		"fallback": "la:fly",
	});
}

export default Component;
