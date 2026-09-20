import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncy1n-byn.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncy1n-byn"/>`,
		"fallback": "nrk:arrow-right-long",
	});
}

export default Component;
