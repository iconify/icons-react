import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ije_0lbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ije_0lbsf"/>`,
		"fallback": "tabler:confetti-filled",
	});
}

export default Component;
