import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebdtpk00q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebdtpk00q"/>`,
		"fallback": "tabler:bookmark-check",
	});
}

export default Component;
