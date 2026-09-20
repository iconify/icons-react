import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_8f_d_5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_8f_d_5n"/>`,
		"fallback": "reicon:chevron-down",
	});
}

export default Component;
