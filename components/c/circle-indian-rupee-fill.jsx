import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8whwu36b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8whwu36b"/>`,
		"fallback": "keyline-icons:circle-indian-rupee-fill",
	});
}

export default Component;
