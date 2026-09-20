import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auy9bfb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auy9bfb_f"/>`,
		"fallback": "ri:funds-box-fill",
	});
}

export default Component;
