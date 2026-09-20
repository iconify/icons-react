import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d55vmqbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d55vmqbdm"/>`,
		"fallback": "mdi:circle-slice-6",
	});
}

export default Component;
