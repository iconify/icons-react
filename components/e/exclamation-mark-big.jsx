import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkmg5saag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkmg5saag"/>`,
		"fallback": "hugeicons:exclamation-mark-big",
	});
}

export default Component;
