import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwmhwbcdr.css';
import '../../css/e/erph9zbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwmhwbcdr"/><path class="erph9zbjp"/>`,
		"fallback": "bx:bxs-injection",
	});
}

export default Component;
