import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj1chix2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj1chix2k"/>`,
		"fallback": "hugeicons:arrow-down-wide-narrow",
	});
}

export default Component;
