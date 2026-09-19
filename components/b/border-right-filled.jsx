import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs-18ub_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs-18ub_n"/>`,
		"fallback": "boxicons:border-right-filled",
	});
}

export default Component;
