import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eruqiz5jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eruqiz5jz"/>`,
		"fallback": "withicons:chart-funnel-solid",
	});
}

export default Component;
