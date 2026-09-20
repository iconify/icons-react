import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irs-1rb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irs-1rb8o"/>`,
		"fallback": "mdi:approximately-equal",
	});
}

export default Component;
