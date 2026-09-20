import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo51s6uhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo51s6uhy"/>`,
		"fallback": "mage:box-minus",
	});
}

export default Component;
