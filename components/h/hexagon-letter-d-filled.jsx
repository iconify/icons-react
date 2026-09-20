import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhxp6ccgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhxp6ccgq"/>`,
		"fallback": "tabler:hexagon-letter-d-filled",
	});
}

export default Component;
