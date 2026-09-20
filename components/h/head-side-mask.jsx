import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7_ca8bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7_ca8bkc"/>`,
		"fallback": "uis:head-side-mask",
	});
}

export default Component;
