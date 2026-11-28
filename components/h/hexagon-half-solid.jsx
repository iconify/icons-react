import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql3-lpzya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql3-lpzya"/>`,
		"fallback": "iconaut:hexagon-half-solid",
	});
}

export default Component;
