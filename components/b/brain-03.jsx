import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq9543b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq9543b2c"/>`,
		"fallback": "hugeicons:brain-03",
	});
}

export default Component;
