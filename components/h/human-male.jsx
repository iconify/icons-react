import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucefltb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucefltb9a"/>`,
		"fallback": "mdi:human-male",
	});
}

export default Component;
