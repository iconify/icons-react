import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib9x47bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib9x47bmi"/>`,
		"fallback": "bx:bxl-invision",
	});
}

export default Component;
