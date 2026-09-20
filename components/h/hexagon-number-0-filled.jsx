import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6lt7bcvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6lt7bcvq"/>`,
		"fallback": "tabler:hexagon-number-0-filled",
	});
}

export default Component;
