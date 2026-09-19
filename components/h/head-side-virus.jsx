import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf439884l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf439884l"/>`,
		"fallback": "fa6-solid:head-side-virus",
	});
}

export default Component;
