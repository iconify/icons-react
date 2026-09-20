import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1st9zdlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1st9zdlh"/>`,
		"fallback": "reicon:fast-forward",
	});
}

export default Component;
