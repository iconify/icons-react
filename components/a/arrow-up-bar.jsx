import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f07w5edil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f07w5edil"/>`,
		"fallback": "tabler:arrow-up-bar",
	});
}

export default Component;
