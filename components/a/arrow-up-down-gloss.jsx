import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqozpfb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqozpfb_l"/>`,
		"fallback": "withicons:arrow-up-down-gloss",
	});
}

export default Component;
