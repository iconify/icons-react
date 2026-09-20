import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh-2zhm_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh-2zhm_e"/>`,
		"fallback": "tabler:circle-dotted-letter-l",
	});
}

export default Component;
