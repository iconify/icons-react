import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5g2cq1iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5g2cq1iy"/>`,
		"fallback": "coolicons:compass-fill-round",
	});
}

export default Component;
