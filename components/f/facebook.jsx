import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j24t_zsqf.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j24t_zsqf"/>`,
		"fallback": "lineicons:facebook",
	});
}

export default Component;
