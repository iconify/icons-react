import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtrqm0byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtrqm0byr"/>`,
		"fallback": "iconaut:dice-two-solid",
	});
}

export default Component;
