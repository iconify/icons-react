import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei599btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei599btr"/>`,
		"fallback": "eva:bell-off-fill",
	});
}

export default Component;
