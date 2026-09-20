import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od9p50b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od9p50b9z"/>`,
		"fallback": "nrk:chevron-up",
	});
}

export default Component;
