import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxb_yw1vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxb_yw1vz"/>`,
		"fallback": "boxicons:arrow-from-left",
	});
}

export default Component;
