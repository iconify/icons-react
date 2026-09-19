import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njdwwmb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njdwwmb6f"/>`,
		"fallback": "bx:bxs-purchase-tag-alt",
	});
}

export default Component;
