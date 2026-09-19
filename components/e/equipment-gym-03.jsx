import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtt7155uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtt7155uo"/>`,
		"fallback": "hugeicons:equipment-gym-03",
	});
}

export default Component;
