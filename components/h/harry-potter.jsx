import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_2s7obvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_2s7obvg"/>`,
		"fallback": "mdi:harry-potter",
	});
}

export default Component;
