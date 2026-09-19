import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbfd9416o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbfd9416o"/>`,
		"fallback": "bx:bxs-volume-low",
	});
}

export default Component;
