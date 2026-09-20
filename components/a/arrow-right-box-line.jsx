import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmhf-k_uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmhf-k_uh"/>`,
		"fallback": "ri:arrow-right-box-line",
	});
}

export default Component;
