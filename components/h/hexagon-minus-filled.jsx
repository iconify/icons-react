import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqwyrreap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqwyrreap"/>`,
		"fallback": "tabler:hexagon-minus-filled",
	});
}

export default Component;
