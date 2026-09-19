import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajl4pv1wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajl4pv1wc"/>`,
		"fallback": "bx:bxs-right-arrow",
	});
}

export default Component;
