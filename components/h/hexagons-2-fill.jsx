import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5ncjnuee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5ncjnuee"/>`,
		"fallback": "mingcute:hexagons-2-fill",
	});
}

export default Component;
