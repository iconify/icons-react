import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgh_cmt6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgh_cmt6u"/>`,
		"fallback": "coolicons:arrow-left-from-line-duotone-round",
	});
}

export default Component;
