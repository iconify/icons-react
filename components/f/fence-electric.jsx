import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to364ober.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to364ober"/>`,
		"fallback": "mdi:fence-electric",
	});
}

export default Component;
