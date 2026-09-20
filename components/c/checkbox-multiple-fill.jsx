import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu_1temnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu_1temnz"/>`,
		"fallback": "ri:checkbox-multiple-fill",
	});
}

export default Component;
