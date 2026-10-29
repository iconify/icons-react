import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwtr5_pps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwtr5_pps"/>`,
		"fallback": "withicons:avatar-dog-solid",
	});
}

export default Component;
