import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w24qb0b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w24qb0b6i"/>`,
		"fallback": "vadivam:alarm-clock-off",
	});
}

export default Component;
