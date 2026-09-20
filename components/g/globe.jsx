import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubr1w8-yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ubr1w8-yo"/>`,
		"fallback": "nrk:globe",
	});
}

export default Component;
