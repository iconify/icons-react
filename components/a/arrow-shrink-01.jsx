import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drs_rw39z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drs_rw39z"/>`,
		"fallback": "hugeicons:arrow-shrink-01",
	});
}

export default Component;
