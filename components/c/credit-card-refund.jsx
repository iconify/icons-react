import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znv2t3fbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znv2t3fbs"/>`,
		"fallback": "tabler:credit-card-refund",
	});
}

export default Component;
