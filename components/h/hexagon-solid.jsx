import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxv_1p2jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxv_1p2jw"/>`,
		"fallback": "mynaui:hexagon-solid",
	});
}

export default Component;
