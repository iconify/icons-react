import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibz29_uar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibz29_uar"/>`,
		"fallback": "mdi:chevron-up",
	});
}

export default Component;
