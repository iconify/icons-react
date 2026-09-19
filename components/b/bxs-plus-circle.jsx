import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtoh-yx4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtoh-yx4x"/>`,
		"fallback": "bx:bxs-plus-circle",
	});
}

export default Component;
