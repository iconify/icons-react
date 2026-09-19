import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrk4ij8ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jrk4ij8ad"/>`,
		"fallback": "healthicons:hospital-24px",
	});
}

export default Component;
