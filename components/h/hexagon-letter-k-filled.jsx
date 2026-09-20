import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhpeq6_wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhpeq6_wo"/>`,
		"fallback": "tabler:hexagon-letter-k-filled",
	});
}

export default Component;
