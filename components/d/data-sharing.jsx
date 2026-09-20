import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn5_oubwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn5_oubwf"/>`,
		"fallback": "uil:data-sharing",
	});
}

export default Component;
