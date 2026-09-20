import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mav9q8bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mav9q8bay"/>`,
		"fallback": "majesticons:add-row-line",
	});
}

export default Component;
