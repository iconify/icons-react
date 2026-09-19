import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htlnq8bmb.css';
import '../../css/o/oeu2lyeho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htlnq8bmb"/><path class="oeu2lyeho"/>`,
		"fallback": "boxicons:arrow-in-left-stroke-circle-half-filled",
	});
}

export default Component;
