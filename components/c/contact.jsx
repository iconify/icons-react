import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_-njn0sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_-njn0sy"/>`,
		"fallback": "mdi:contact",
	});
}

export default Component;
