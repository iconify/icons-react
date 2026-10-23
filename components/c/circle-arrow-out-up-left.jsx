import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy5fo_y_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy5fo_y_d"/>`,
		"fallback": "vadivam:circle-arrow-out-up-left",
	});
}

export default Component;
