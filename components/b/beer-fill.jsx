import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_s_c5kte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_s_c5kte"/>`,
		"fallback": "ri:beer-fill",
	});
}

export default Component;
