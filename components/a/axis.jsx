import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf1_rvinf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf1_rvinf"/>`,
		"fallback": "mdi:axis",
	});
}

export default Component;
